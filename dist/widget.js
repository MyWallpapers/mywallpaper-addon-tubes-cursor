const __MYWALLPAPER_WIDGET_RUNTIME_CONTRACT_VERSION__ = "sdk-only-v1";
const window = undefined;
const document = undefined;
const self = undefined;
const globalThis = undefined;
const top = undefined;
const parent = undefined;
const frames = undefined;
const opener = undefined;
const location = undefined;
const navigator = undefined;
const fetch = undefined;
const XMLHttpRequest = undefined;
const WebSocket = undefined;
const EventSource = undefined;
const Notification = undefined;
const localStorage = undefined;
const sessionStorage = undefined;
const indexedDB = undefined;
const BroadcastChannel = undefined;
const caches = undefined;
const open = undefined;
const crypto = undefined;
const Worker = undefined;
const SharedWorker = undefined;
const RTCPeerConnection = undefined;
const RTCDataChannel = undefined;
const __mwRuntime = __canvasWidgetGlobals.runtime;
const __mwReact = __mwRuntime.react;
const __mwReactJsxRuntime = __mwRuntime.reactJsxRuntime;
const __mwSdkReact = __mwRuntime.sdkReact;
const __mwSdkContracts = __mwRuntime.sdkContracts;
const __mwSdkPermissions = __mwRuntime.sdkPermissions;
const O = __mwReactJsxRuntime.jsx;
const A = __mwReact.useRef;
const c = __mwReact.useEffect;
const V = __mwSdkReact.useSettings;
const X = __mwSdkReact.useSettingsActions;
function M(t, e, o) {
  return Math.min(o, Math.max(e, t));
}
function E(t) {
  const e = String(t || "").replace("#", "").trim(), o = Number.parseInt(e.length === 3 ? e.split("").map((l) => l + l).join("") : e, 16);
  return Number.isFinite(o) ? [o >> 16 & 255, o >> 8 & 255, o & 255] : [255, 255, 255];
}
function D(t, e, o) {
  const l = E(t), s = E(e), u = M(o, 0, 1);
  return [
    Math.round(l[0] + (s[0] - l[0]) * u),
    Math.round(l[1] + (s[1] - l[1]) * u),
    Math.round(l[2] + (s[2] - l[2]) * u)
  ];
}
function H(t, e) {
  if (t.length === 0)
    return [255, 255, 255];
  if (t.length === 1)
    return E(t[0]);
  const o = M(e, 0, 1) * (t.length - 1), l = Math.min(Math.floor(o), t.length - 2);
  return D(t[l], t[l + 1], o - l);
}
function P(t, e) {
  return `rgba(${t[0]}, ${t[1]}, ${t[2]}, ${M(e, 0, 1)})`;
}
function Y(t, e, o, l) {
  const s = t * 0.73, u = Array.from({ length: e }, (i, r) => ({
    x: o * 0.5,
    y: l * 0.5,
    age: r / Math.max(e - 1, 1)
  }));
  return { phase: s, points: u };
}
function J(t, e = {}) {
  const o = t.getContext("2d");
  let l = 0, s = !1, u = 1, i = 1, r = e.tubeCount ?? 16, f = e.maxSegments ?? 64, S = e.maxRadius ?? 0.03, w = e.colors ?? ["#f967fb", "#ff6b6b", "#53bc28"], I = e.lightColors ?? ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"], B = e.lightIntensity ?? 200, z = e.lerp ?? 0.85, k = e.noise ?? 0.05, F = !!e.bloom, R = e.bloom?.strength ?? 0.7, d = [];
  function N() {
    const n = Math.max(1, Math.floor(t.clientWidth || t.width || 1)), h = Math.max(1, Math.floor(t.clientHeight || t.height || 1));
    n === u && h === i && t.width === n && t.height === h || (u = n, i = h, t.width = n, t.height = h, d = Array.from({ length: r }, (b, x) => Y(x, f, u, i)));
  }
  function L() {
    d.length === r && d.every((n) => n.points.length === f) || (d = Array.from({ length: r }, (n, h) => Y(h, f, u, i)));
  }
  function j(n, h) {
    const b = n.points;
    if (b.length < 2)
      return;
    const x = Math.max(1, Math.min(u, i) * S * (0.55 + h / Math.max(r, 1)));
    o.lineCap = "round", o.lineJoin = "round";
    for (let g = 1; g < b.length; g += 1) {
      const m = g / (b.length - 1), C = H(w, (h / Math.max(r - 1, 1) + m * 0.35) % 1);
      o.beginPath(), o.moveTo(b[g - 1].x, b[g - 1].y), o.lineTo(b[g].x, b[g].y), o.lineWidth = x * (1 - m * 0.82), o.strokeStyle = P(C, 0.9 * (1 - m)), o.stroke();
    }
  }
  function W() {
    if (s || !o)
      return;
    N(), L(), l += 1, o.clearRect(0, 0, u, i), o.globalCompositeOperation = "lighter", o.shadowBlur = F ? 24 * R : 8;
    const n = H(I, l * 4e-3 % 1);
    o.shadowColor = P(n, M(B / 260, 0.15, 1));
    const h = l * 0.016, b = u * (0.5 + Math.cos(h * 0.51) * 0.32), x = i * (0.5 + Math.sin(h * 0.37) * 0.28), g = M(1 - z, 0.04, 0.95);
    for (let m = 0; m < d.length; m += 1) {
      const C = d[m], $ = k * Math.min(u, i) * 1.8, q = b + Math.cos(h * (1.1 + m * 0.02) + C.phase) * $, G = x + Math.sin(h * (1.4 + m * 0.03) + C.phase) * $, p = C.points[0];
      p.x += (q - p.x) * g, p.y += (G - p.y) * g;
      for (let y = 1; y < C.points.length; y += 1) {
        const _ = C.points[y - 1], T = C.points[y];
        T.x += (_.x - T.x) * (g * 0.82), T.y += (_.y - T.y) * (g * 0.82);
      }
      j(C, m);
    }
    o.globalCompositeOperation = "source-over", requestAnimationFrame(W);
  }
  return N(), l = requestAnimationFrame(W), {
    dispose() {
      s = !0, cancelAnimationFrame(l);
    },
    setTubeColors(n) {
      w = n;
    },
    setLightColors(n) {
      I = n;
    },
    setLightIntensity(n) {
      B = n;
    },
    setMaterial() {
    },
    setLerp(n) {
      z = n;
    },
    setNoise(n) {
      k = n;
    },
    setBloomEnabled(n) {
      F = n;
    },
    setBloomParams(n) {
      R = n?.strength ?? R;
    },
    setTubeCount(n) {
      r = Math.max(1, Math.floor(n)), L();
    },
    setTubeGeometry(n) {
      f = Math.max(2, Math.floor(n?.maxSegments ?? f)), S = n?.maxRadius ?? S, L();
    }
  };
}
const U = {
  tubeCount: 16,
  tubeRadius: 0.03,
  tubeLength: 64,
  metalness: 1,
  roughness: 0.25,
  smoothness: 0.85,
  noise: 0.05,
  tubeColor1: "#f967fb",
  tubeColor2: "#ff6b6b",
  tubeColor3: "#53bc28",
  lightIntensity: 200,
  lightColor1: "#83f36e",
  lightColor2: "#fe8a2e",
  lightColor3: "#ff008a",
  lightColor4: "#60aed5",
  bloomEnabled: !0,
  bloomThreshold: 0,
  bloomStrength: 0.7,
  bloomRadius: 1.5
}, v = {
  width: "100%",
  height: "100%",
  display: "block",
  pointerEvents: "none"
};
function K(t) {
  return { ...U, ...t };
}
function a() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}
function et() {
  const t = K(V()), { setValue: e, onButtonClick: o } = X(), l = A(null), s = A(null), u = A(t);
  return u.current = t, c(() => {
    const i = l.current;
    if (!i) return;
    const r = u.current;
    return s.current = J(i, {
      bloom: r.bloomEnabled ? {
        threshold: r.bloomThreshold,
        strength: r.bloomStrength,
        radius: r.bloomRadius
      } : null,
      tubeCount: r.tubeCount,
      maxRadius: r.tubeRadius,
      maxSegments: r.tubeLength,
      metalness: r.metalness,
      roughness: r.roughness,
      colors: [r.tubeColor1, r.tubeColor2, r.tubeColor3],
      lightIntensity: r.lightIntensity,
      lightColors: [r.lightColor1, r.lightColor2, r.lightColor3, r.lightColor4],
      lerp: r.smoothness,
      noise: r.noise
    }), () => {
      s.current?.dispose(), s.current = null;
    };
  }, []), c(() => {
    s.current?.setTubeColors([t.tubeColor1, t.tubeColor2, t.tubeColor3]);
  }, [t.tubeColor1, t.tubeColor2, t.tubeColor3]), c(() => {
    const i = s.current;
    i && (i.setLightColors([t.lightColor1, t.lightColor2, t.lightColor3, t.lightColor4]), i.setLightIntensity(t.lightIntensity));
  }, [t.lightColor1, t.lightColor2, t.lightColor3, t.lightColor4, t.lightIntensity]), c(() => {
    s.current?.setMaterial({ metalness: t.metalness, roughness: t.roughness });
  }, [t.metalness, t.roughness]), c(() => {
    const i = s.current;
    i && (i.setLerp(t.smoothness), i.setNoise(t.noise));
  }, [t.smoothness, t.noise]), c(() => {
    s.current?.setBloomEnabled(t.bloomEnabled);
  }, [t.bloomEnabled]), c(() => {
    s.current?.setBloomParams({
      threshold: t.bloomThreshold,
      strength: t.bloomStrength,
      radius: t.bloomRadius
    });
  }, [t.bloomThreshold, t.bloomStrength, t.bloomRadius]), c(() => {
    s.current?.setTubeCount(t.tubeCount);
  }, [t.tubeCount]), c(() => {
    s.current?.setTubeGeometry({ maxSegments: t.tubeLength, maxRadius: t.tubeRadius });
  }, [t.tubeLength, t.tubeRadius]), c(() => {
    o("randomizeTubeColors", () => {
      e("tubeColor1", a()), e("tubeColor2", a()), e("tubeColor3", a());
    }), o("randomizeLightColors", () => {
      e("lightColor1", a()), e("lightColor2", a()), e("lightColor3", a()), e("lightColor4", a());
    }), o("randomizeAll", () => {
      e("tubeColor1", a()), e("tubeColor2", a()), e("tubeColor3", a()), e("lightColor1", a()), e("lightColor2", a()), e("lightColor3", a()), e("lightColor4", a());
    });
  }, [o, e]), /* @__PURE__ */ O("canvas", { ref: l, style: v });
}
export {
  et as default
};
