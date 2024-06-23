import * as path from './libs/path';
import { TypeErrorWithCode } from './libs/errors';

export function convertURLToPath (url: URL) {
  if (url.protocol !== 'file:') {
    throw new TypeErrorWithCode('[ERR_INVALID_FILE_URL_PATH]', `Expected protocol is file, but given is ${url.protocol}`);
  }

  if (url.hostname !== '') {
    throw new TypeErrorWithCode('[ERR_INVALID_FILE_URL_PATH]', 'The URL must be of scheme file');
  }

  return path.normalize(url.pathname);
}

export function generateRandomCharacters(length: number): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
