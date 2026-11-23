import { trimDecimal } from './trimDecimal';

export function formatDayLength(hours: number): string {
  if (hours < 48) return `${trimDecimal(hours)} hours`;
  const days = hours / 24;
  if (days >= 10) return `${Math.round(days)} Earth days`;
  return `${trimDecimal(days)} Earth days`;
}
