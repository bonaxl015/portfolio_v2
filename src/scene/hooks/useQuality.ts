import { useCallback, useState } from 'react';
import { DEVICE_QUALITY, type Quality } from '../../device';

export function useQuality() {
  const [quality, setQuality] = useState<Quality>(DEVICE_QUALITY);
  const downgrade = useCallback(() => setQuality('low'), []);
  return { quality, downgrade };
}
