export const RING_FRAGMENT = `
uniform sampler2D ringMap;
uniform vec3 sunPosition;
uniform vec3 center;
uniform float radius;
uniform float sunIntensity;

varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vec4 texel = texture2D(ringMap, vec2(vUv.x, 0.5));
  vec3 toSun = normalize(sunPosition - vPosition);
  vec3 offset = vPosition - center;
  float along = dot(offset, toSun);
  float axisDistance = sqrt(max(dot(offset, offset) - along * along, 0.0));
  float shadow = step(along, 0.0) * (1.0 - smoothstep(radius * 0.97, radius * 1.02, axisDistance));
  vec3 color = texel.rgb * sunIntensity * (1.0 - 0.94 * shadow);
  gl_FragColor = vec4(color, texel.a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
