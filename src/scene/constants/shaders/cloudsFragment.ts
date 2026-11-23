export const CLOUDS_FRAGMENT = `
uniform sampler2D cloudMap;
uniform vec3 sunPosition;
uniform float sunIntensity;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  float facing = dot(normalize(vNormal), normalize(sunPosition - vPosition));
  float diffuse = clamp((facing + 0.12) / 1.12, 0.0, 1.0);
  float density = texture2D(cloudMap, vUv).r;
  gl_FragColor = vec4(vec3(diffuse * sunIntensity), density * 0.9);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
