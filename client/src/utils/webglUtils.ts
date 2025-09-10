export function isWebGLSupported(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch (e) {
    return false;
  }
}

export function getWebGLErrorMessage(): string {
  const isWebGL2 = !!window.WebGL2RenderingContext;
  const isWebGL1 = !!window.WebGLRenderingContext;
  
  if (!isWebGL1) {
    return 'WebGL is not supported by your browser or graphics card.';
  }
  
  return 'WebGL context could not be created. Please check your browser settings.';
}