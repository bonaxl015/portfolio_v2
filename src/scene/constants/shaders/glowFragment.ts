export const GLOW_FRAGMENT = `
uniform vec3 color;
uniform float intensity;

varying vec2 vUv;

void main() {
  float distanceFromCenter = length(vUv - 0.5) * 2.0;
  float glow = pow(max(1.0 - distanceFromCenter, 0.0), 3.0) * intensity;
  gl_FragColor = vec4(color, glow);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
