import type { Quality } from './enums/quality';

export type DeviceProfile = {
  override: Quality | null;
  cores: number;
  memoryGb: number | null;
  coarsePointer: boolean;
  saveData: boolean;
};
