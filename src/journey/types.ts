import type { Vector3 } from 'three';

export type Pose = {
  position: Vector3;
  target: Vector3;
};

export type FlightView = {
  position: Vector3;
  target: Vector3;
  travel: Vector3;
  weight: number;
};

export type SectionBox = {
  top: number;
  height: number;
};

export type Heading = 1 | -1;
