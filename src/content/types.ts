export type Profile = {
  name: string;
  role: string;
  company: string;
  summary: string;
  about: string;
  experience: string;
  languages: readonly string[];
};

export type Skill = {
  name: string;
  level: number;
};

export type CareerEntry = {
  period: string;
  title: string;
};

export type Service = {
  title: string;
  description: string;
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
};
