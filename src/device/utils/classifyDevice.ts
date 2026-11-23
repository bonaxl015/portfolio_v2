import type { Quality } from '../enums/quality';
import type { DeviceProfile } from '../types';

const LOW_END_CORES = 4;
const LOW_END_MEMORY_GB = 4;

export function classifyDevice(profile: DeviceProfile): Quality {
  if (profile.override) return profile.override;
  if (profile.saveData) return 'low';
  if (profile.coarsePointer) return 'low';
  if (profile.cores <= LOW_END_CORES) return 'low';
  if (profile.memoryGb !== null && profile.memoryGb <= LOW_END_MEMORY_GB) return 'low';
  return 'high';
}
