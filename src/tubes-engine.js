function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function hexToRgb(value) {
  const normalized = String(value || '').replace('#', '').trim()
  const parsed = Number.parseInt(normalized.length === 3
    ? normalized.split('').map((part) => part + part).join('')
    : normalized, 16)
  if (!Number.isFinite(parsed)) {
    return [255, 255, 255]
  }
  return [(parsed >> 16) & 255, (parsed >> 8) & 255, parsed & 255]
}

function mixColor(left, right, t) {
  const a = hexToRgb(left)
  const b = hexToRgb(right)
  const k = clamp(t, 0, 1)
  return [
    Math.round(a[0] + (b[0] - a[0]) * k),
    Math.round(a[1] + (b[1] - a[1]) * k),
    Math.round(a[2] + (b[2] - a[2]) * k),
  ]
}

function colorAt(colors, t) {
  if (colors.length === 0) {
    return [255, 255, 255]
  }
  if (colors.length === 1) {
    return hexToRgb(colors[0])
  }
  const scaled = clamp(t, 0, 1) * (colors.length - 1)
  const index = Math.min(Math.floor(scaled), colors.length - 2)
  return mixColor(colors[index], colors[index + 1], scaled - index)
}

function rgba(rgb, alpha) {
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${clamp(alpha, 0, 1)})`
}

function createTube(index, segments, width, height) {
  const phase = index * 0.73
  const points = Array.from({ length: segments }, (_, pointIndex) => ({
    x: width * 0.5,
    y: height * 0.5,
    age: pointIndex / Math.max(segments - 1, 1),
  }))
  return { phase, points }
}

export function TubesCursor(canvas, opts = {}) {
  const context = canvas.getContext('2d')
  let frame = 0
  let disposed = false
  let width = 1
  let height = 1
  let tubeCount = opts.tubeCount ?? 16
  let segments = opts.maxSegments ?? 64
  let radius = opts.maxRadius ?? 0.03
  let colors = opts.colors ?? ['#f967fb', '#ff6b6b', '#53bc28']
  let lightColors = opts.lightColors ?? ['#83f36e', '#fe8a2e', '#ff008a', '#60aed5']
  let lightIntensity = opts.lightIntensity ?? 200
  let lerp = opts.lerp ?? 0.85
  let noise = opts.noise ?? 0.05
  let bloomEnabled = Boolean(opts.bloom)
  let bloomStrength = opts.bloom?.strength ?? 0.7
  let tubes = []

  function resize() {
    const nextWidth = Math.max(1, Math.floor(canvas.clientWidth || canvas.width || 1))
    const nextHeight = Math.max(1, Math.floor(canvas.clientHeight || canvas.height || 1))
    if (nextWidth === width && nextHeight === height && canvas.width === nextWidth && canvas.height === nextHeight) {
      return
    }
    width = nextWidth
    height = nextHeight
    canvas.width = nextWidth
    canvas.height = nextHeight
    tubes = Array.from({ length: tubeCount }, (_, index) => createTube(index, segments, width, height))
  }

  function ensureTubes() {
    if (tubes.length === tubeCount && tubes.every((tube) => tube.points.length === segments)) {
      return
    }
    tubes = Array.from({ length: tubeCount }, (_, index) => createTube(index, segments, width, height))
  }

  function drawTube(tube, index) {
    const points = tube.points
    if (points.length < 2) {
      return
    }

    const lineWidth = Math.max(1, Math.min(width, height) * radius * (0.55 + index / Math.max(tubeCount, 1)))
    context.lineCap = 'round'
    context.lineJoin = 'round'

    for (let i = 1; i < points.length; i += 1) {
      const age = i / (points.length - 1)
      const rgb = colorAt(colors, (index / Math.max(tubeCount - 1, 1) + age * 0.35) % 1)
      context.beginPath()
      context.moveTo(points[i - 1].x, points[i - 1].y)
      context.lineTo(points[i].x, points[i].y)
      context.lineWidth = lineWidth * (1 - age * 0.82)
      context.strokeStyle = rgba(rgb, 0.9 * (1 - age))
      context.stroke()
    }
  }

  function render() {
    if (disposed || !context) {
      return
    }
    resize()
    ensureTubes()
    frame += 1

    context.clearRect(0, 0, width, height)
    context.globalCompositeOperation = 'lighter'
    context.shadowBlur = bloomEnabled ? 24 * bloomStrength : 8
    const light = colorAt(lightColors, (frame * 0.004) % 1)
    context.shadowColor = rgba(light, clamp(lightIntensity / 260, 0.15, 1))

    const time = frame * 0.016
    const baseX = width * (0.5 + Math.cos(time * 0.51) * 0.32)
    const baseY = height * (0.5 + Math.sin(time * 0.37) * 0.28)
    const follow = clamp(1 - lerp, 0.04, 0.95)

    for (let index = 0; index < tubes.length; index += 1) {
      const tube = tubes[index]
      const wobble = noise * Math.min(width, height) * 1.8
      const targetX = baseX + Math.cos(time * (1.1 + index * 0.02) + tube.phase) * wobble
      const targetY = baseY + Math.sin(time * (1.4 + index * 0.03) + tube.phase) * wobble
      const head = tube.points[0]
      head.x += (targetX - head.x) * follow
      head.y += (targetY - head.y) * follow
      for (let i = 1; i < tube.points.length; i += 1) {
        const previous = tube.points[i - 1]
        const point = tube.points[i]
        point.x += (previous.x - point.x) * (follow * 0.82)
        point.y += (previous.y - point.y) * (follow * 0.82)
      }
      drawTube(tube, index)
    }

    context.globalCompositeOperation = 'source-over'
    requestAnimationFrame(render)
  }

  resize()
  frame = requestAnimationFrame(render)

  return {
    dispose() {
      disposed = true
      cancelAnimationFrame(frame)
    },
    setTubeColors(nextColors) {
      colors = nextColors
    },
    setLightColors(nextColors) {
      lightColors = nextColors
    },
    setLightIntensity(nextIntensity) {
      lightIntensity = nextIntensity
    },
    setMaterial() {},
    setLerp(nextLerp) {
      lerp = nextLerp
    },
    setNoise(nextNoise) {
      noise = nextNoise
    },
    setBloomEnabled(enabled) {
      bloomEnabled = enabled
    },
    setBloomParams(params) {
      bloomStrength = params?.strength ?? bloomStrength
    },
    setTubeCount(nextCount) {
      tubeCount = Math.max(1, Math.floor(nextCount))
      ensureTubes()
    },
    setTubeGeometry(params) {
      segments = Math.max(2, Math.floor(params?.maxSegments ?? segments))
      radius = params?.maxRadius ?? radius
      ensureTubes()
    },
  }
}
