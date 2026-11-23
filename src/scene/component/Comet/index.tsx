import { Billboard } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { memo, useEffect, useMemo, useRef } from 'react';
import { AdditiveBlending, Color, DoubleSide, type Group, ShaderMaterial, Vector3 } from 'three';
import {
  COMET_LOOK,
  COMET_NEAR_FADE,
  COMET_RIBBON_SEGMENTS,
  COMET_SWARM,
} from '../../constants/comets';
import { COMET_TAIL_FRAGMENT, COMET_TAIL_VERTEX } from '../../constants/shaders/cometTail';
import { GLOW_FRAGMENT } from '../../constants/shaders/glowFragment';
import { WORLD_VERTEX } from '../../constants/shaders/worldVertex';
import type { CometSlot } from '../../types';
import { cometFade } from '../../utils/cometFade';
import { createRibbonGeometry } from '../../utils/createRibbonGeometry';
import { stepComet } from '../../utils/stepComet';
import { tailQuaternion } from '../../utils/tailQuaternion';
import { trailingShare } from '../../utils/trailingShare';

type Props = {
  slot: number;
};

export const Comet = memo(function Comet({ slot }: Props) {
  const camera = useThree((state) => state.camera);
  const body = useRef<Group>(null);
  const tails = useRef<Group>(null);
  const forward = useMemo(() => new Vector3(), []);
  const lifecycle = useRef<CometSlot>({
    countdown: COMET_SWARM.firstDelay + slot * COMET_SWARM.stagger,
    flight: null,
  });
  const ribbon = useMemo(() => createRibbonGeometry(COMET_RIBBON_SEGMENTS), []);
  const glows = useMemo(
    () =>
      COMET_LOOK.glows.map((config) => ({
        config,
        material: new ShaderMaterial({
          vertexShader: WORLD_VERTEX,
          fragmentShader: GLOW_FRAGMENT,
          uniforms: { color: { value: new Color(config.color) }, intensity: { value: 0 } },
          transparent: true,
          depthWrite: false,
          blending: AdditiveBlending,
        }),
      })),
    [],
  );
  const streams = useMemo(
    () =>
      COMET_LOOK.tails.map((config) => ({
        config,
        base: new Color(config.color).multiplyScalar(config.brightness),
        material: new ShaderMaterial({
          vertexShader: COMET_TAIL_VERTEX,
          fragmentShader: COMET_TAIL_FRAGMENT,
          uniforms: {
            tailLength: { value: config.length },
            width: { value: config.width },
            curvature: { value: config.curvature },
            fadeStart: { value: COMET_NEAR_FADE[0] },
            fadeEnd: { value: COMET_NEAR_FADE[1] },
            color: { value: new Color(0, 0, 0) },
            time: { value: 0 },
            flow: { value: config.flow },
            streaks: { value: config.streaks },
            falloff: { value: config.falloff },
          },
          transparent: true,
          depthWrite: false,
          side: DoubleSide,
          blending: AdditiveBlending,
        }),
      })),
    [],
  );

  useEffect(
    () => () => {
      ribbon.dispose();
      glows.forEach(({ material }) => material.dispose());
      streams.forEach(({ material }) => material.dispose());
    },
    [ribbon, glows, streams],
  );

  useFrame((_, delta) => {
    camera.getWorldDirection(forward);
    lifecycle.current = stepComet(lifecycle.current, delta, camera.position, forward, Math.random, COMET_SWARM);
    const { flight } = lifecycle.current;
    if (!body.current || !tails.current) return;
    body.current.visible = flight !== null;
    if (!flight) return;
    const fade = cometFade(flight.age / flight.life);
    const bend = trailingShare(flight.position, flight.velocity);
    body.current.position.copy(flight.position);
    body.current.scale.setScalar(flight.scale);
    tails.current.quaternion.copy(tailQuaternion(flight.position, flight.velocity));
    glows.forEach(({ config, material }) => {
      material.uniforms.intensity.value = config.intensity * fade;
    });
    streams.forEach(({ config, base, material }) => {
      material.uniforms.time.value += delta;
      material.uniforms.curvature.value = config.curvature * bend;
      material.uniforms.color.value.copy(base).multiplyScalar(fade);
    });
  });

  return (
    <group ref={body} visible={false}>
      <Billboard>
        {glows.map(({ config, material }) => (
          <mesh key={config.size} material={material}>
            <planeGeometry args={[config.size, config.size]} />
          </mesh>
        ))}
      </Billboard>
      <group ref={tails}>
        {streams.map(({ config, material }) => (
          <mesh key={config.id} geometry={ribbon} material={material} frustumCulled={false} />
        ))}
      </group>
    </group>
  );
});
