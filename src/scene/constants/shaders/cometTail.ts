export const COMET_TAIL_VERTEX = `
attribute vec2 ribbon;

uniform float tailLength;
uniform float width;
uniform float curvature;
uniform float fadeStart;
uniform float fadeEnd;

varying vec2 vRibbon;
varying float vVisibility;

vec3 spine(float along) {
  return vec3(along * tailLength, curvature * along * along * tailLength, 0.0);
}

void main() {
  float along = ribbon.x;
  vec3 center = (modelViewMatrix * vec4(spine(along), 1.0)).xyz;
  vec3 ahead = (modelViewMatrix * vec4(spine(along + 0.01), 1.0)).xyz;
  vec3 tangent = normalize(ahead - center);
  vec3 across = cross(tangent, normalize(-center));
  float sideways = length(across);
  vec3 side = sideways > 0.0001 ? across / sideways : vec3(0.0, 1.0, 0.0);
  vec3 placed = center + side * ribbon.y * width * (0.08 + along);
  gl_Position = projectionMatrix * vec4(placed, 1.0);
  vRibbon = ribbon;
  vVisibility = smoothstep(0.02, 0.3, sideways) * smoothstep(fadeStart, fadeEnd, -center.z);
}
`;

export const COMET_TAIL_FRAGMENT = `
uniform vec3 color;
uniform float time;
uniform float flow;
uniform float streaks;
uniform float falloff;

varying vec2 vRibbon;
varying float vVisibility;

float hash(vec2 point) {
  return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 point) {
  vec2 cell = floor(point);
  vec2 offset = fract(point);
  vec2 blend = offset * offset * (3.0 - 2.0 * offset);
  float a = hash(cell);
  float b = hash(cell + vec2(1.0, 0.0));
  float c = hash(cell + vec2(0.0, 1.0));
  float d = hash(cell + vec2(1.0, 1.0));
  return mix(mix(a, b, blend.x), mix(c, d, blend.x), blend.y);
}

void main() {
  float along = clamp(vRibbon.x, 0.0, 1.0);
  float across = vRibbon.y;
  float profile = exp(-across * across * 4.0);
  float reach = pow(max(1.0 - along, 0.0), falloff) * smoothstep(0.0, 0.05, along);
  float strands = noise(vec2(across * streaks, along * 3.0 - time * flow));
  float glow = profile * reach * mix(0.65, 1.35, strands) * vVisibility;
  gl_FragColor = vec4(color, glow);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
