import type { PlanetId } from './enums/planetId';

export type PlanetFacts = {
  distanceKm: number;
};

export type PlanetSurface = {
  map: string;
  nightMap?: string;
  specularMap?: string;
  wrap: number;
};

export type PlanetAtmosphere = {
  color: string;
  scale: number;
  intensity: number;
};

export type PlanetRing = {
  map: string;
  inner: number;
  outer: number;
};

export type PlanetMoon = {
  map: string;
  radius: number;
  distance: number;
  angle: number;
  height: number;
};

export type PlanetFraming = {
  distance: number;
  azimuth: number;
  elevation: number;
};

export type Planet = {
  id: PlanetId;
  name: string;
  accent: string;
  facts: PlanetFacts;
  radius: number;
  orbit: number;
  orbitAngle: number;
  poleLean: number;
  spin: number;
  surface: PlanetSurface;
  clouds?: string;
  atmosphere?: PlanetAtmosphere;
  ring?: PlanetRing;
  moon?: PlanetMoon;
  framing: PlanetFraming;
};

export type Star = {
  radius: number;
  map: string;
  core: string;
  intensity: number;
};
