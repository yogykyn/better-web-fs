export const pathSeperator = '/';

/**
 * Function to normalize the given path.
 */
export function normalize(path: string): string {
  const pathSegments = path.split(pathSeperator);

  for (let i = 0; i < pathSegments.length; i++) {
    const pathSegment = pathSegments[i];

    if (pathSegment === '..') pathSegments.splice(i - 1, 2);
    else if (pathSegment === '.') pathSegments.splice(i, 1);
  }

  return pathSegments.join(pathSeperator);
}

/**
 * Function to join all given path segments.
 */
export function join(...paths: string[]): string {
  if (paths.length === 0) return '.';
  
  let fullpath = '';
  for (const path of paths) {
    fullpath += path.endsWith(pathSeperator)
      ? path
      : path + pathSeperator;
  }

  return normalize(fullpath);
}
