import type { ReactNode } from 'react';
import { ENGINEERING_SKILLS, FRONT_END_SKILLS } from '../../content';
import { PLUTO, type PlanetId } from '../../planets';
import { About } from '../component/About';
import { Career } from '../component/Career';
import { Contact } from '../component/Contact';
import { Farewell } from '../component/Farewell';
import { Intro } from '../component/Intro';
import { Services } from '../component/Services';
import { Skills } from '../component/Skills';
import { Testimonials } from '../component/Testimonials';

export const STATION_CONTENT: Record<PlanetId, ReactNode> = {
  mercury: <Intro />,
  venus: <About />,
  earth: (
    <Skills
      title="Front-end toolkit"
      intro="The languages and frameworks I build interfaces with."
      skills={FRONT_END_SKILLS}
    />
  ),
  mars: (
    <Skills
      title="Back end and tooling"
      intro="The server-side and build tools behind those interfaces."
      skills={ENGINEERING_SKILLS}
    />
  ),
  jupiter: <Career />,
  saturn: <Services />,
  uranus: <Testimonials />,
  neptune: <Contact />,
  pluto: <Farewell distanceKm={PLUTO.facts.distanceKm} />,
};
