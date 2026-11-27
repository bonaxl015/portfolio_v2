import type { ContactChannel } from '../types';

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    label: 'Email',
    value: 'bonaxl015@gmail.com',
    href: 'mailto:bonaxl015@gmail.com',
    newTab: false,
    copyable: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/bon-axl-feeser',
    href: 'https://www.linkedin.com/in/bon-axl-feeser',
    newTab: true,
    copyable: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/bonaxl015',
    href: 'https://github.com/bonaxl015',
    newTab: true,
    copyable: false,
  },
];
