import { useCallback, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { TubesCursor } from './tubes-engine.js'

type TubesInstance = ReturnType<typeof TubesCursor>

interface MyWallpaperLayerApi {
  root: HTMLElement
  settings: {
    get(): Record<string, unknown>
    subscribe(listener: (settings: Record<string, unknown>) => void): () => void
    set(partial: Record<string, unknown>): void
  }
  actions: {
    on(key: string, listener: (event: unknown) => void): () => void
  }
}

interface MyWallpaperApi {
  layer: MyWallpaperLayerApi
}

declare global {
  interface Window {
    MyWallpaper?: MyWallpaperApi
  }
}

interface Settings {
  tubeCount: number
  tubeRadius: number
  tubeLength: number
  metalness: number
  roughness: number
  smoothness: number
  noise: number
  tubeColor1: string
  tubeColor2: string
  tubeColor3: string
  lightIntensity: number
  lightColor1: string
  lightColor2: string
  lightColor3: string
  lightColor4: string
  bloomEnabled: boolean
  bloomThreshold: number
  bloomStrength: number
  bloomRadius: number
}

const DEFAULTS: Settings = {
  tubeCount: 16,
  tubeRadius: 0.03,
  tubeLength: 64,
  metalness: 1,
  roughness: 0.25,
  smoothness: 0.85,
  noise: 0.05,
  tubeColor1: '#f967fb',
  tubeColor2: '#ff6b6b',
  tubeColor3: '#53bc28',
  lightIntensity: 200,
  lightColor1: '#83f36e',
  lightColor2: '#fe8a2e',
  lightColor3: '#ff008a',
  lightColor4: '#60aed5',
  bloomEnabled: true,
  bloomThreshold: 0,
  bloomStrength: 0.7,
  bloomRadius: 1.5,
}

const layer = window.MyWallpaper?.layer
const runtimeRoot = layer?.root ?? document.getElementById('root')

const CANVAS_STYLE = {
  width: '100%',
  height: '100%',
  display: 'block',
  pointerEvents: 'none',
} as const

if (runtimeRoot) {
  runtimeRoot.classList.add('mwa-tubes-root')
  runtimeRoot.style.width = '100%'
  runtimeRoot.style.height = '100%'
  runtimeRoot.style.margin = '0'
  runtimeRoot.style.overflow = 'hidden'
  runtimeRoot.style.background = 'transparent'
}

if (!layer) {
  document.documentElement.style.width = '100%'
  document.documentElement.style.height = '100%'
  document.documentElement.style.margin = '0'
  document.body.style.width = '100%'
  document.body.style.height = '100%'
  document.body.style.margin = '0'
  document.body.style.overflow = 'hidden'
  document.body.style.background = 'transparent'
}

function normalizeSettings(settings: Partial<Settings>): Settings {
  return { ...DEFAULTS, ...settings }
}

function randomHex() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`
}

function useSettings<T>(): T {
  const [settings, setSettings] = useState<T>(() => (layer?.settings.get() ?? {}) as T)

  useEffect(() => {
    return layer?.settings.subscribe((next) => setSettings(next as T)) ?? (() => {})
  }, [])

  return settings
}

function useSettingsActions() {
  const setValues = useCallback((values: Record<string, unknown>) => {
    layer?.settings.set(values)
  }, [])

  const onButtonClick = useCallback((key: string, handler: (event: unknown) => void) => {
    return layer?.actions.on(key, handler) ?? (() => {})
  }, [])

  return { setValues, onButtonClick }
}

export default function TubesCursorWidget() {
  const settings = normalizeSettings(useSettings<Partial<Settings>>())
  const { setValues, onButtonClick } = useSettingsActions()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const instanceRef = useRef<TubesInstance | null>(null)
  const settingsRef = useRef(settings)
  settingsRef.current = settings

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const s = settingsRef.current
    instanceRef.current = TubesCursor(canvas, {
      bloom: s.bloomEnabled
        ? {
            threshold: s.bloomThreshold,
            strength: s.bloomStrength,
            radius: s.bloomRadius,
          }
        : null,
      tubeCount: s.tubeCount,
      maxRadius: s.tubeRadius,
      maxSegments: s.tubeLength,
      metalness: s.metalness,
      roughness: s.roughness,
      colors: [s.tubeColor1, s.tubeColor2, s.tubeColor3],
      lightIntensity: s.lightIntensity,
      lightColors: [s.lightColor1, s.lightColor2, s.lightColor3, s.lightColor4],
      lerp: s.smoothness,
      noise: s.noise,
    })

    return () => {
      instanceRef.current?.dispose()
      instanceRef.current = null
    }
  }, [])

  useEffect(() => {
    instanceRef.current?.setTubeColors([settings.tubeColor1, settings.tubeColor2, settings.tubeColor3])
  }, [settings.tubeColor1, settings.tubeColor2, settings.tubeColor3])

  useEffect(() => {
    const inst = instanceRef.current
    if (!inst) return
    inst.setLightColors([settings.lightColor1, settings.lightColor2, settings.lightColor3, settings.lightColor4])
    inst.setLightIntensity(settings.lightIntensity)
  }, [settings.lightColor1, settings.lightColor2, settings.lightColor3, settings.lightColor4, settings.lightIntensity])

  useEffect(() => {
    instanceRef.current?.setMaterial({ metalness: settings.metalness, roughness: settings.roughness })
  }, [settings.metalness, settings.roughness])

  useEffect(() => {
    const inst = instanceRef.current
    if (!inst) return
    inst.setLerp(settings.smoothness)
    inst.setNoise(settings.noise)
  }, [settings.smoothness, settings.noise])

  useEffect(() => {
    instanceRef.current?.setBloomEnabled(settings.bloomEnabled)
  }, [settings.bloomEnabled])

  useEffect(() => {
    instanceRef.current?.setBloomParams({
      threshold: settings.bloomThreshold,
      strength: settings.bloomStrength,
      radius: settings.bloomRadius,
    })
  }, [settings.bloomThreshold, settings.bloomStrength, settings.bloomRadius])

  useEffect(() => {
    instanceRef.current?.setTubeCount(settings.tubeCount)
  }, [settings.tubeCount])

  useEffect(() => {
    instanceRef.current?.setTubeGeometry({ maxSegments: settings.tubeLength, maxRadius: settings.tubeRadius })
  }, [settings.tubeLength, settings.tubeRadius])

  useEffect(() => {
    const unsubscribeTubeColors = onButtonClick('randomizeTubeColors', () => {
      setValues({
        tubeColor1: randomHex(),
        tubeColor2: randomHex(),
        tubeColor3: randomHex(),
      })
    })
    const unsubscribeLightColors = onButtonClick('randomizeLightColors', () => {
      setValues({
        lightColor1: randomHex(),
        lightColor2: randomHex(),
        lightColor3: randomHex(),
        lightColor4: randomHex(),
      })
    })
    const unsubscribeAll = onButtonClick('randomizeAll', () => {
      setValues({
        tubeColor1: randomHex(),
        tubeColor2: randomHex(),
        tubeColor3: randomHex(),
        lightColor1: randomHex(),
        lightColor2: randomHex(),
        lightColor3: randomHex(),
        lightColor4: randomHex(),
      })
    })
    return () => {
      unsubscribeTubeColors()
      unsubscribeLightColors()
      unsubscribeAll()
    }
  }, [onButtonClick, setValues])

  return <canvas ref={canvasRef} style={CANVAS_STYLE} />
}

if (runtimeRoot) {
  createRoot(runtimeRoot).render(<TubesCursorWidget />)
}
