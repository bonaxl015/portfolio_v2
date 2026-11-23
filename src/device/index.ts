import { readDeviceProfile } from './readDeviceProfile';
import { classifyDevice } from './utils/classifyDevice';

export * from './enums/quality';
export * from './types';

export const DEVICE_QUALITY = classifyDevice(readDeviceProfile());
