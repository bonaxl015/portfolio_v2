import { PLANETS, orbitPosition } from '../../planets';
import { stationPoses } from '../../journey';
import { PATH_CLEARANCE, PLANET_CLEARANCE, SIGHTLINE_CLEARANCE } from '../constants/belts';
import type { Exclusion } from '../types';

export function beltExclusions(aspect: number): Exclusion[] {
  const poses = stationPoses(aspect);
  const centers = PLANETS.map((planet) => orbitPosition(planet.orbit, planet.orbitAngle));
  const paths = poses.slice(1).map((pose, index) => ({
    start: poses[index].position,
    end: pose.position,
    radius: PATH_CLEARANCE,
  }));
  const sightlines = poses.map((pose, index) => ({
    start: pose.position,
    end: centers[index],
    radius: PLANETS[index].radius * SIGHTLINE_CLEARANCE,
  }));
  const planets = centers.map((center, index) => ({
    start: center,
    end: center,
    radius: PLANETS[index].radius * PLANET_CLEARANCE,
  }));
  return [...paths, ...sightlines, ...planets];
}
