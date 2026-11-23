import { memo } from 'react';
import { PLANETS } from '../../../planets';
import { STATION_CONTENT } from '../../constants/stationContent';
import { Station } from '../Station';

export const Stations = memo(function Stations() {
  return (
    <main>
      {PLANETS.map((planet) => (
        <Station
          key={planet.id}
          id={planet.id}
          name={planet.name}
          accent={planet.accent}
          distanceKm={planet.facts.distanceKm}
          dayHours={planet.facts.dayHours}
        >
          {STATION_CONTENT[planet.id]}
        </Station>
      ))}
    </main>
  );
});
