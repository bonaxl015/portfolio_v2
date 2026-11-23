export function trimDecimal(value: number): string {
  return Number(value.toFixed(1)).toString();
}
