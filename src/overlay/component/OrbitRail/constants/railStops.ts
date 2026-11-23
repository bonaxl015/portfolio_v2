import { PLANETS } from '../../../../planets';
import { logPositions } from '../utils/logPositions';

export const RAIL_STOPS = logPositions(PLANETS.map((planet) => planet.facts.distanceKm));

export const LOG_DISTANCES = PLANETS.map((planet) => Math.log(planet.facts.distanceKm));
