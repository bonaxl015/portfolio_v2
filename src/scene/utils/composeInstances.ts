import { Euler, Matrix4, Quaternion, Vector3 } from 'three';
import type { InstanceBuffers, Rock } from '../types';

export function composeInstances(rocks: readonly Rock[]): InstanceBuffers {
  const matrices = new Float32Array(rocks.length * 16);
  const colors = new Float32Array(rocks.length * 3);
  const matrix = new Matrix4();
  const position = new Vector3();
  const rotation = new Quaternion();
  const euler = new Euler();
  const scale = new Vector3();
  rocks.forEach((rock, index) => {
    matrix.compose(
      position.set(...rock.position),
      rotation.setFromEuler(euler.set(...rock.rotation)),
      scale.setScalar(rock.scale),
    );
    matrix.toArray(matrices, index * 16);
    colors.fill(rock.shade, index * 3, index * 3 + 3);
  });
  return { matrices, colors, count: rocks.length };
}
