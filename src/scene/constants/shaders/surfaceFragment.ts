export const SURFACE_FRAGMENT = `
uniform sampler2D dayMap;
uniform sampler2D nightMap;
uniform sampler2D specularMap;
uniform vec3 sunPosition;
uniform float sunIntensity;
uniform float ambient;
uniform float wrap;
uniform vec3 tint;
uniform vec3 rimColor;
uniform float rimStrength;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vShade;

void main() {
  vec3 surfaceNormal = normalize(vNormal);
  vec3 toSun = normalize(sunPosition - vPosition);
  vec3 toCamera = normalize(cameraPosition - vPosition);
  float facing = dot(surfaceNormal, toSun);
  float diffuse = clamp((facing + wrap) / (1.0 + wrap), 0.0, 1.0);
  vec3 albedo = texture2D(dayMap, vUv).rgb * tint * vShade;
  vec3 color = albedo * (diffuse * sunIntensity + ambient);
#ifdef HAS_NIGHT
  float darkness = 1.0 - smoothstep(-0.25, 0.12, facing);
  color += texture2D(nightMap, vUv).rgb * darkness * 1.6;
#endif
#ifdef HAS_SPECULAR
  vec3 halfway = normalize(toSun + toCamera);
  float glint = pow(max(dot(surfaceNormal, halfway), 0.0), 70.0) * texture2D(specularMap, vUv).r;
  color += vec3(1.0, 0.9, 0.75) * glint * step(0.0, facing) * sunIntensity;
#endif
  float rim = pow(1.0 - max(dot(surfaceNormal, toCamera), 0.0), 3.0);
  color += rimColor * rim * rimStrength * smoothstep(-0.2, 0.5, facing);
  gl_FragColor = vec4(color, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
