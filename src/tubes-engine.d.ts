export interface TubesCursorOptions {
  bloom: { threshold: number; strength: number; radius: number } | null
  tubeCount: number
  maxRadius: number
  maxSegments: number
  metalness: number
  roughness: number
  colors: string[]
  lightIntensity: number
  lightColors: string[]
  lerp: number
  noise: number
}

export interface TubesCursorInstance {
  setTubeColors(colors: string[]): void
  setLightColors(colors: string[]): void
  setLightIntensity(value: number): void
  setMaterial(params: { metalness: number; roughness: number }): void
  setLerp(value: number): void
  setNoise(value: number): void
  setTubeCount(value: number): void
  setTubeGeometry(params: { maxSegments: number; maxRadius: number }): void
  setBloomEnabled(value: boolean): void
  setBloomParams(params: { threshold: number; strength: number; radius: number }): void
  dispose(): void
}

export function TubesCursor(canvas: HTMLCanvasElement, options?: Partial<TubesCursorOptions>): TubesCursorInstance
