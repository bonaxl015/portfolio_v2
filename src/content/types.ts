export type Profile = {
  name: string;
  role: string;
  company: string;
  summary: string;
  about: string;
  experience: string;
  focus: string;
  languages: readonly string[];
};

export type ToolGroup = {
  label: string;
  tools: readonly string[];
};

export type CareerEntry = {
  period: string;
  title: string;
  company: string;
  highlight: string;
};

export type Practice = {
  title: string;
  description: string;
};

export type AgentBuiltProject = {
  name: string;
  summary: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
  newTab: boolean;
  copyable: boolean;
};
