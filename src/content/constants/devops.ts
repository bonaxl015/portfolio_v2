import type { Practice, ToolGroup } from '../types';

export const DEVOPS_INTRO =
  'I started my career keeping a telecom core network running. Today I build the pipelines and infrastructure that ship my code.';

export const DEVOPS_PRACTICES: readonly Practice[] = [
  {
    title: 'Bally’s Interactive',
    description: 'GitLab CI/CD that builds, tests and deploys micro-frontends.',
  },
  {
    title: 'Smart Communications',
    description: 'Core network monitoring, incident response, rollouts and Linux/Unix admin.',
  },
  {
    title: 'Personal projects',
    description: 'Serverless AWS in Terraform, shipped by GitHub Actions on every push.',
  },
];

export const DEVOPS_TOOLKIT: readonly ToolGroup[] = [
  { label: 'CI/CD', tools: ['GitLab CI', 'GitHub Actions'] },
  { label: 'Infrastructure', tools: ['Terraform', 'Docker', 'Vagrant'] },
  { label: 'AWS', tools: ['Lambda', 'AppSync', 'S3', 'CloudFront', 'SES'] },
  { label: 'Operations', tools: ['Linux/Unix', 'Monitoring', 'Incident response', 'Scripting'] },
];
