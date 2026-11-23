import { QUALITIES, type Quality } from './enums/quality';
import type { DeviceProfile } from './types';

type NavigatorHints = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
};

export function readDeviceProfile(): DeviceProfile {
  const hints = navigator as NavigatorHints;
  return {
    override: readOverride(),
    cores: navigator.hardwareConcurrency ?? 8,
    memoryGb: hints.deviceMemory ?? null,
    coarsePointer: window.matchMedia('(pointer: coarse)').matches,
    saveData: hints.connection?.saveData ?? false,
  };
}

function readOverride(): Quality | null {
  const requested = new URLSearchParams(window.location.search).get('quality');
  return QUALITIES.find((quality) => quality === requested) ?? null;
}
