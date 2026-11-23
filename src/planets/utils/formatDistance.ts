import { trimDecimal } from './trimDecimal';

export function formatDistance(km: number): string {
  if (km >= 1e9) return `${trimDecimal(km / 1e9)} billion km`;
  return `${trimDecimal(km / 1e6)} million km`;
}
