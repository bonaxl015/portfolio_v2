export const QUALITIES = ['high', 'low'] as const;

export type Quality = (typeof QUALITIES)[number];
