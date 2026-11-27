import type { ToolGroup } from '../types';

export const FRONT_END_TOOLKIT: readonly ToolGroup[] = [
  { label: 'Languages', tools: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Sass'] },
  { label: 'Frameworks', tools: ['React', 'Next.js', 'Vue 3'] },
  { label: 'Mobile', tools: ['React Native', 'Expo', 'Reanimated', 'Skia'] },
  {
    label: 'State & forms',
    tools: ['TanStack Query', 'Zustand', 'Redux Toolkit', 'React Hook Form', 'Zod'],
  },
  { label: 'UI', tools: ['Tailwind CSS', 'shadcn/ui', 'MUI', 'Ant Design', 'Storybook'] },
  { label: '3D & motion', tools: ['Three.js', 'React Three Fiber', 'Framer Motion'] },
  {
    label: 'Testing',
    tools: ['Jest', 'Vitest', 'Playwright', 'Cypress', 'Testing Library', 'MSW'],
  },
  { label: 'Build', tools: ['Vite', 'Webpack', 'SWC', 'single-spa', 'Lerna'] },
];

export const BACK_END_TOOLKIT: readonly ToolGroup[] = [
  { label: 'Languages', tools: ['TypeScript', 'Python', 'SQL'] },
  { label: 'Frameworks', tools: ['Node.js', 'Express', 'NestJS', 'FastAPI'] },
  { label: 'Databases', tools: ['PostgreSQL', 'DynamoDB', 'Redis', 'MongoDB', 'Supabase'] },
  { label: 'Data access', tools: ['Prisma', 'Drizzle', 'SQLAlchemy', 'MikroORM'] },
  { label: 'APIs', tools: ['REST', 'WebSockets', 'OpenAPI', 'JWT', 'Stripe'] },
  { label: 'Testing', tools: ['Jest', 'Supertest', 'Pytest'] },
];
