import type { PathLike } from '../types';
import { TypeErrorWithCode } from './errors';

export const pathSeperator = '/';

function isAbsolutePath(path: string) {
  return path.length === 0 || path[0] === '/';
}

/**
 * Function to normalize the given path.
 */
export function normalize(path: string): string {
  const newPath: string[] = [];
  const pathSegments: string[] = path.split(pathSeperator);

  for (let i = 0; i < pathSegments.length; i++) {
    const pathSegment = pathSegments[i];

    if (pathSegment === '..') newPath.pop();
    else if (pathSegment !== '.' && !(pathSegment.trim())) newPath.push(pathSegment);
  }

  return newPath.join(pathSeperator);
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

/**
 * Function to resolve the given path.
 */
export function resolve(cwd: string, ...paths: string[]): string {
  const fullpath = join(...paths);
  return '/' + normalize(isAbsolutePath(fullpath) ? fullpath : join(cwd, fullpath));
}

/**
 * Function to convert URL (file:/....) to path.
 */
export function convertURLToPath (url: URL) {
  if (url.protocol !== 'file:') {
    throw new TypeErrorWithCode('[ERR_INVALID_FILE_URL_PATH]', `Expected protocol is file, but given is ${url.protocol}`);
  }

  if (url.hostname !== '') {
    throw new TypeErrorWithCode('[ERR_INVALID_FILE_URL_PATH]', 'The URL must be of scheme file');
  }

  return normalize(url.pathname);
}

/**
 * Function to convert path like into path.
 */
export function convertPathLikeToString(targetPath: PathLike): string {
  return normalize(
    targetPath instanceof URL
      ? convertURLToPath(targetPath)
      : targetPath.toString()
  );
}
