export const SUN_FRAGMENT = `
uniform sampler2D map;
uniform vec3 core;
uniform float intensity;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec3 granulation = texture2D(map, vUv).rgb;
  float facing = max(dot(normalize(vNormal), normalize(cameraPosition - vPosition)), 0.0);
  float limb = pow(facing, 0.6);
  vec3 color = mix(granulation, core, 0.15 + 0.35 * limb) * (0.6 + 0.4 * limb) * intensity;
  gl_FragColor = vec4(color, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
