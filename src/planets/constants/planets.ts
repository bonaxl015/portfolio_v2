import type { Planet } from '../types';
import { TEXTURE_ROOT } from './textures';

export const MERCURY: Planet = {
  id: 'mercury',
  name: 'Mercury',
  accent: '#b9afa3',
  facts: { distanceKm: 57.9e6, dayHours: 4222.6 },
  radius: 0.6,
  orbit: 24,
  orbitAngle: 0,
  poleLean: 0.03,
  spin: 0.03,
  surface: { map: `${TEXTURE_ROOT}mercury.webp`, wrap: 0 },
  framing: { distance: 4.4, azimuth: 128, elevation: 6 },
};

export const VENUS: Planet = {
  id: 'venus',
  name: 'Venus',
  accent: '#e6cb9c',
  facts: { distanceKm: 108.2e6, dayHours: 2802 },
  radius: 1.1,
  orbit: 40,
  orbitAngle: 16,
  poleLean: 177.4,
  spin: -0.012,
  surface: { map: `${TEXTURE_ROOT}venus.webp`, wrap: 0.25 },
  atmosphere: { color: '#f3d9a4', scale: 1.06, intensity: 1.1 },
  framing: { distance: 4.2, azimuth: 80, elevation: 8 },
};

export const EARTH: Planet = {
  id: 'earth',
  name: 'Earth',
  accent: '#86b6f2',
  facts: { distanceKm: 149.6e6, dayHours: 24 },
  radius: 1.2,
  orbit: 60,
  orbitAngle: -8,
  poleLean: 23.4,
  spin: 0.05,
  surface: {
    map: `${TEXTURE_ROOT}earth-day.webp`,
    nightMap: `${TEXTURE_ROOT}earth-night.webp`,
    specularMap: `${TEXTURE_ROOT}earth-specular.webp`,
    wrap: 0.1,
  },
  clouds: `${TEXTURE_ROOT}earth-clouds.webp`,
  atmosphere: { color: '#6fa8ff', scale: 1.07, intensity: 1.4 },
  moon: { map: `${TEXTURE_ROOT}moon.webp`, radius: 0.33, distance: 4.4, angle: 227, height: 1.3 },
  framing: { distance: 4.2, azimuth: 75, elevation: 10 },
};

export const MARS: Planet = {
  id: 'mars',
  name: 'Mars',
  accent: '#e0875f',
  facts: { distanceKm: 228e6, dayHours: 24.7 },
  radius: 0.8,
  orbit: 84,
  orbitAngle: 14,
  poleLean: 25.2,
  spin: 0.05,
  surface: { map: `${TEXTURE_ROOT}mars.webp`, wrap: 0.04 },
  atmosphere: { color: '#e7a07a', scale: 1.04, intensity: 0.5 },
  framing: { distance: 4.4, azimuth: 82, elevation: 8 },
};

export const JUPITER: Planet = {
  id: 'jupiter',
  name: 'Jupiter',
  accent: '#d9b48c',
  facts: { distanceKm: 778.5e6, dayHours: 9.9 },
  radius: 4.2,
  orbit: 160,
  orbitAngle: -6,
  poleLean: 3.1,
  spin: 0.09,
  surface: { map: `${TEXTURE_ROOT}jupiter.webp`, wrap: 0.08 },
  atmosphere: { color: '#e9d2b0', scale: 1.04, intensity: 0.6 },
  framing: { distance: 4, azimuth: 78, elevation: 6 },
};

export const SATURN: Planet = {
  id: 'saturn',
  name: 'Saturn',
  accent: '#e4ce96',
  facts: { distanceKm: 1432e6, dayHours: 10.7 },
  radius: 3.6,
  orbit: 250,
  orbitAngle: 9,
  poleLean: 26.7,
  spin: 0.08,
  surface: { map: `${TEXTURE_ROOT}saturn.webp`, wrap: 0.08 },
  atmosphere: { color: '#ebd9a8', scale: 1.04, intensity: 0.5 },
  ring: { map: `${TEXTURE_ROOT}saturn-ring.webp`, inner: 1.24, outer: 2.27 },
  framing: { distance: 8.6, azimuth: 70, elevation: 14 },
};

export const URANUS: Planet = {
  id: 'uranus',
  name: 'Uranus',
  accent: '#9edce2',
  facts: { distanceKm: 2867e6, dayHours: 17.2 },
  radius: 2.2,
  orbit: 360,
  orbitAngle: -10,
  poleLean: 97.8,
  spin: -0.06,
  surface: { map: `${TEXTURE_ROOT}uranus.webp`, wrap: 0.12 },
  atmosphere: { color: '#a8e6ec', scale: 1.06, intensity: 1 },
  framing: { distance: 4.3, azimuth: 78, elevation: 8 },
};

export const NEPTUNE: Planet = {
  id: 'neptune',
  name: 'Neptune',
  accent: '#7393f2',
  facts: { distanceKm: 4515e6, dayHours: 16.1 },
  radius: 2.1,
  orbit: 470,
  orbitAngle: 6,
  poleLean: 28.3,
  spin: 0.06,
  surface: { map: `${TEXTURE_ROOT}neptune.webp`, wrap: 0.12 },
  atmosphere: { color: '#6f92ff', scale: 1.06, intensity: 1.1 },
  framing: { distance: 4.3, azimuth: 80, elevation: 8 },
};

export const PLUTO: Planet = {
  id: 'pluto',
  name: 'Pluto',
  accent: '#d6bea6',
  facts: { distanceKm: 5906.4e6, dayHours: 153.3 },
  radius: 0.45,
  orbit: 600,
  orbitAngle: -4,
  poleLean: 52,
  spin: -0.02,
  surface: { map: `${TEXTURE_ROOT}pluto.webp`, wrap: 0 },
  framing: { distance: 5.6, azimuth: 70, elevation: 10 },
};

export const PLANETS: readonly Planet[] = [
  MERCURY,
  VENUS,
  EARTH,
  MARS,
  JUPITER,
  SATURN,
  URANUS,
  NEPTUNE,
  PLUTO,
];
