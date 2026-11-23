import { Bloom, EffectComposer, ToneMapping, Vignette } from '@react-three/postprocessing';
import { ToneMappingMode } from 'postprocessing';
import { memo } from 'react';

type Props = {
  multisampling: number;
  bloomLevels: number;
};

export const Effects = memo(function Effects({ multisampling, bloomLevels }: Props) {
  return (
    <EffectComposer key={multisampling} multisampling={multisampling}>
      <Bloom
        mipmapBlur
        levels={bloomLevels}
        luminanceThreshold={1}
        luminanceSmoothing={0.25}
        intensity={1.1}
        radius={0.8}
      />
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      <Vignette offset={0.25} darkness={0.55} />
    </EffectComposer>
  );
});
