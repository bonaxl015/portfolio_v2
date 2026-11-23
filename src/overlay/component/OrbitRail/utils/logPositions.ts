export function logPositions(values: readonly number[]): number[] {
  const logs = values.map(Math.log);
  const min = Math.min(...logs);
  const span = Math.max(...logs) - min;
  return logs.map((value) => (value - min) / span);
}
