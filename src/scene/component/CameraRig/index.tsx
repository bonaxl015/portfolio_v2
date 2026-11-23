import { useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import { MathUtils, Vector2, Vector3 } from 'three';
import { flightView, stationPoses, travelHeading, type Heading } from '../../../journey';
import {
  BANK_DAMPING,
  FLIGHT_DAMPING,
  HEAD_PITCH,
  HEAD_YAW,
  INTRO_POSITION,
  LOOK_DAMPING,
  MIN_FRAME_TIME,
} from '../../constants/flight';
import { SUN_POSITION } from '../../constants/lighting';
import { usePointer } from '../../hooks/usePointer';
import { bankAngle } from '../../utils/bankAngle';
import { lookQuaternion } from '../../utils/lookQuaternion';
import { viewOffsetQuaternion } from '../../utils/viewOffsetQuaternion';
import { wrapAngle } from '../../utils/wrapAngle';
import { yawOf } from '../../utils/yawOf';

type Props = {
  journey: number;
  reducedMotion: boolean;
};

const STILL = new Vector2();

export function CameraRig({ journey, reducedMotion }: Props) {
  const camera = useThree((state) => state.camera);
  const aspect = useThree((state) => state.size.width / state.size.height);
  const poses = useMemo(() => stationPoses(aspect), [aspect]);
  const pointer = usePointer();
  const [flight] = useState(() => lookQuaternion(new Vector3(...INTRO_POSITION), SUN_POSITION));
  const motion = useRef({
    journey,
    heading: 1 as Heading,
    yaw: yawOf(flight),
    roll: 0,
    look: new Vector2(),
  });

  useFrame((_, delta) => {
    const state = motion.current;
    const step = reducedMotion ? 1 : 1 - Math.exp(-FLIGHT_DAMPING * delta);
    state.heading = travelHeading(state.journey, journey, state.heading);
    state.journey = journey;

    const view = flightView(journey, poses, state.heading);
    camera.position.lerp(view.position, step);
    const docked = lookQuaternion(camera.position, view.target);
    const ahead = lookQuaternion(camera.position, camera.position.clone().add(view.travel));
    flight.slerp(docked.slerp(ahead, view.weight), step);

    const yaw = yawOf(flight);
    const yawRate = wrapAngle(yaw - state.yaw) / Math.max(delta, MIN_FRAME_TIME);
    state.yaw = yaw;
    const bank = reducedMotion ? 0 : bankAngle(yawRate);
    state.roll = MathUtils.lerp(state.roll, bank, 1 - Math.exp(-BANK_DAMPING * delta));
    state.look.lerp(reducedMotion ? STILL : pointer.current, 1 - Math.exp(-LOOK_DAMPING * delta));

    camera.quaternion
      .copy(flight)
      .multiply(viewOffsetQuaternion(-state.look.x * HEAD_YAW, state.look.y * HEAD_PITCH, state.roll));
  });

  return null;
}
