import { PerformanceMonitor } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { CAMERA_FOV } from '../journey';
import { PLANETS } from '../planets';
import { AsteroidBelt } from './component/AsteroidBelt';
import { CameraRig } from './component/CameraRig';
import { Comet } from './component/Comet';
import { Effects } from './component/Effects';
import { Meteors } from './component/Meteors';
import { Planet } from './component/Planet';
import { SpaceDust } from './component/SpaceDust';
import { Starfield } from './component/Starfield';
import { Sun } from './component/Sun';
import { BELTS } from './constants/belts';
import { COMET_SLOTS } from './constants/comets';
import { CAMERA_FAR, CAMERA_NEAR, INTRO_POSITION } from './constants/flight';
import { DECLINE_SAMPLES, QUALITY_SETTINGS } from './constants/quality';
import { useQuality } from './hooks/useQuality';
import styles from './index.module.css';

type Props = {
  journey: number;
  reducedMotion: boolean;
};

const CAMERA = { fov: CAMERA_FOV, near: CAMERA_NEAR, far: CAMERA_FAR, position: INTRO_POSITION };
const RENDERER = { powerPreference: 'high-performance' as const, antialias: false, stencil: false };

export function Scene({ journey, reducedMotion }: Props) {
  const { quality, downgrade } = useQuality();
  const settings = QUALITY_SETTINGS[quality];
  const animate = !reducedMotion;
  return (
    <div className={styles.scene} aria-hidden="true">
      <Canvas camera={CAMERA} dpr={settings.dpr} gl={RENDERER}>
        <Suspense fallback={null}>
          <PerformanceMonitor iterations={DECLINE_SAMPLES} onDecline={downgrade} />
          <Starfield starCount={settings.starCount} />
          <Sun coronaIntensity={settings.coronaIntensity} />
          {PLANETS.map((planet) => (
            <Planet key={planet.id} planet={planet} segments={settings.sphereSegments} animate={animate} />
          ))}
          {BELTS.map((belt) => (
            <AsteroidBelt
              key={belt.seed}
              belt={belt}
              density={settings.beltDensity}
              detail={settings.rockDetail}
            />
          ))}
          {animate &&
            COMET_SLOTS.slice(0, settings.cometCount).map((slot) => <Comet key={slot} slot={slot} />)}
          {animate && <Meteors />}
          {animate && <SpaceDust />}
          <CameraRig journey={journey} reducedMotion={reducedMotion} />
          {settings.postprocessing && (
            <Effects multisampling={settings.multisampling} bloomLevels={settings.bloomLevels} />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
