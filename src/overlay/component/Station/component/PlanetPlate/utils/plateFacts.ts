import { formatDayLength, formatDistance, formatDuration, lightSeconds } from '../../../../../../planets';

export type PlateFact = {
  label: string;
  value: string;
};

export function plateFacts(distanceKm: number, dayHours: number): PlateFact[] {
  return [
    { label: 'From the Sun', value: formatDistance(distanceKm) },
    { label: 'Sunlight takes', value: formatDuration(lightSeconds(distanceKm)) },
    { label: 'One day lasts', value: formatDayLength(dayHours) },
  ];
}
