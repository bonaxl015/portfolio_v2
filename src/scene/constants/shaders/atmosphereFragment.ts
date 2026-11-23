export const ATMOSPHERE_FRAGMENT = `
uniform vec3 color;
uniform vec3 sunPosition;
uniform float edge;
uniform float intensity;

varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec3 shellNormal = normalize(vNormal);
  vec3 toCamera = normalize(cameraPosition - vPosition);
  float depth = clamp(-dot(shellNormal, toCamera) / edge, 0.0, 1.0);
  float lit = smoothstep(-0.35, 0.5, dot(shellNormal, normalize(sunPosition - vPosition)));
  float glow = pow(depth, 2.5) * lit * intensity;
  gl_FragColor = vec4(color, glow);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
