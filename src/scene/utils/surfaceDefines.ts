export function surfaceDefines(hasNight: boolean, hasSpecular: boolean): Record<string, string> {
  const defines: Record<string, string> = {};
  if (hasNight) defines.HAS_NIGHT = '';
  if (hasSpecular) defines.HAS_SPECULAR = '';
  return defines;
}
