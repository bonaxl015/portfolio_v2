export const WORLD_VERTEX = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vShade;

void main() {
  vec4 local = vec4(position, 1.0);
  vec3 localNormal = normal;
  vShade = vec3(1.0);
#ifdef USE_INSTANCING
  local = instanceMatrix * local;
  localNormal = mat3(instanceMatrix) * localNormal;
#endif
#ifdef USE_INSTANCING_COLOR
  vShade = instanceColor;
#endif
  vec4 world = modelMatrix * local;
  vUv = uv;
  vPosition = world.xyz;
  vNormal = normalize(mat3(modelMatrix) * localNormal);
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;
