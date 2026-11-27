import type { AgentBuiltProject, Practice } from '../types';

export const AGENTIC_INTRO =
  'I ship with AI coding agents every day. The agent plans, writes and tests; I set the rules and review every change.';

export const AGENTIC_PRACTICES: readonly Practice[] = [
  {
    title: 'Claude Code as a daily driver',
    description:
      'CLAUDE.md and AGENTS.md rules, hooks and subagents keep the agent inside each codebase’s conventions.',
  },
  {
    title: 'Skills I write',
    description:
      'Reusable skills for commit and PR conventions, TDD loops, code and API reviews, and app store release checks.',
  },
];

export const AGENT_BUILT_PROJECTS: readonly AgentBuiltProject[] = [
  { name: 'UniOrder', summary: 'QR-ordering SaaS on FastAPI, Lambda and DynamoDB' },
  { name: 'Crazy Game', summary: 'A puzzle game where the interface lies to you' },
  { name: 'React SSR', summary: 'Streaming React 19 SSR on Express, no framework' },
  { name: 'This portfolio', summary: 'Three.js solar system, deployed by GitHub Actions' },
];
