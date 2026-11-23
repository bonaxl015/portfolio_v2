import type { Vector3 } from 'three';

export type Triple = readonly [number, number, number];

export type QualitySettings = {
  dpr: [number, number];
  postprocessing: boolean;
  coronaIntensity: number;
  multisampling: number;
  bloomLevels: number;
  beltDensity: number;
  rockDetail: number;
  starCount: number;
  sphereSegments: number;
  cometCount: number;
};

export type SurfaceOptions = {
  map: string;
  nightMap?: string;
  specularMap?: string;
  wrap: number;
  rimColor?: string;
  rimStrength?: number;
  tint?: string;
};

export type BeltConfig = {
  seed: number;
  count: number;
  inner: number;
  outer: number;
  thickness: number;
  arc: readonly [number, number];
  size: readonly [number, number];
  shade: readonly [number, number];
  tint: string;
};

export type Rock = {
  position: Triple;
  rotation: Triple;
  scale: number;
  shade: number;
  shape: number;
};

export type RockWave = {
  direction: Triple;
  frequency: number;
  amplitude: number;
  phase: number;
};

export type Exclusion = {
  start: Vector3;
  end: Vector3;
  radius: number;
};

export type InstanceBuffers = {
  matrices: Float32Array;
  colors: Float32Array;
  count: number;
};

export type TailConfig = {
  id: string;
  length: number;
  width: number;
  curvature: number;
  flow: number;
  streaks: number;
  falloff: number;
  color: string;
  brightness: number;
};

export type GlowConfig = {
  size: number;
  color: string;
  intensity: number;
};

export type CometLook = {
  glows: readonly GlowConfig[];
  tails: readonly TailConfig[];
};

export type CometSwarmSettings = {
  count: number;
  firstDelay: number;
  stagger: number;
  retry: number;
  interval: readonly [number, number];
  distance: readonly [number, number];
  entry: readonly [number, number];
  lift: readonly [number, number];
  inbound: readonly [number, number];
  speed: readonly [number, number];
  life: readonly [number, number];
  scale: readonly [number, number];
  sunClearance: number;
  maxTailAlignment: number;
};

export type CometFlight = {
  position: Vector3;
  velocity: Vector3;
  scale: number;
  age: number;
  life: number;
};

export type CometSlot = {
  countdown: number;
  flight: CometFlight | null;
};

export type MeteorSettings = {
  count: number;
  firstDelay: number;
  interval: readonly [number, number];
  distance: readonly [number, number];
  speed: readonly [number, number];
  life: readonly [number, number];
  trail: number;
  glow: number;
};

export type Meteor = {
  start: Vector3;
  velocity: Vector3;
  life: number;
  age: number;
};

export type MeteorField = {
  meteors: (Meteor | null)[];
  countdown: number;
};

export type DustSettings = {
  seed: number;
  count: number;
  size: number;
  streak: number;
  minSpeed: number;
  fullSpeed: number;
  brightness: number;
};

export type StreakBuffers = {
  positions: Float32Array;
  colors: Float32Array;
};
