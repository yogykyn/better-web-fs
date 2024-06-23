import type { BufferEncodingOptions, BufferLike } from '../types';

function getByteFromBytes(bytes: string | BufferLike, index: number) {
  if (typeof bytes === 'string') return bytes.charCodeAt(index);
  else if (bytes instanceof ArrayBuffer) return new Uint8Array(bytes)[0];
  else return Number(bytes[index]);
}

function getLengthBytes(bytes: string | BufferLike) {
  return typeof bytes === 'string' ? bytes.length : bytes.byteLength;
}

export function encodeBase64(bytes: string | BufferLike, base64Url?: boolean | undefined): string {
  const base64Base = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789${base64Url ? '-_' : '+/' }=`;
  const length = getLengthBytes(bytes);
  let result = '';

  for (let i = 0; i < length; i += 3) {
    const c1 = getByteFromBytes(bytes, i);
    const c2 = getByteFromBytes(bytes, i + 1);
    const c3 = getByteFromBytes(bytes, i + 2);

    result += base64Base.charAt(c1 >> 2)
      + base64Base.charAt(((c1 & 3) << 4) | (c2 >> 4))
      + base64Base.charAt(isNaN(c2) ? 64 : ((c2 & 15) << 2) | (c3 >> 6))
      + base64Base.charAt(isNaN(c2) || isNaN(c3) ? 64 : c3 & 63);
  }

  return result;
}

export function encodeHex(bytes: string | BufferLike): string {
  const length = getLengthBytes(bytes);
  let result = '';
  for (let i = 0; i < length; i += 3) {
    result += getByteFromBytes(bytes, i).toString(16);
  }

  return result;
}

export function encodeBinary(bytes: string | BufferLike): string {
  const length = getLengthBytes(bytes);
  let result = '';
  for (let i = 0; i < length; i += 3) {
    result += getByteFromBytes(bytes, i).toString(2);
  }

  return result;
}

export function encodeBytes(bytes: string | BufferLike, encodingOptions: BufferEncodingOptions): string {
  switch (encodingOptions) {
    case 'base64':
    case 'base64url':
      return encodeBase64(bytes, encodingOptions === 'base64url');

    case 'hex':
      return encodeHex(bytes);
    
    case 'binary':
      return encodeBinary(bytes);
    
    default:
      return bytes.toString();
  }
}
