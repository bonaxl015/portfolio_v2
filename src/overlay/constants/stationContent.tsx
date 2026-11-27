import type { ReactNode } from 'react';
import { BACK_END_TOOLKIT, FRONT_END_TOOLKIT } from '../../content';
import type { PlanetId } from '../../planets';
import { About } from '../component/About';
import { AgenticAi } from '../component/AgenticAi';
import { Career } from '../component/Career';
import { Contact } from '../component/Contact';
import { DevOps } from '../component/DevOps';
import { Farewell } from '../component/Farewell';
import { Intro } from '../component/Intro';
import { Skills } from '../component/Skills';
import { Testimonials } from '../component/Testimonials';

export const STATION_CONTENT: Record<PlanetId, ReactNode> = {
  mercury: <Intro />,
  venus: <About />,
  earth: (
    <Skills
      title="Front-end toolkit"
      intro="What I use to design, build and ship interfaces for the web and mobile."
      groups={FRONT_END_TOOLKIT}
    />
  ),
  mars: (
    <Skills
      title="Back-end toolkit"
      intro="The services and data behind those interfaces."
      groups={BACK_END_TOOLKIT}
    />
  ),
  jupiter: <DevOps />,
  saturn: <AgenticAi />,
  uranus: <Career />,
  neptune: <Testimonials />,
  pluto: (
    <>
      <Contact />
      <Farewell />
    </>
  ),
};
