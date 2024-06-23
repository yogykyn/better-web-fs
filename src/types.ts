export type BufferEncodingOptions = 'ascii'
  | 'utf8'
  | 'utf-8'
  | 'utf16le'
  | 'utf-16le'
  | 'ucs2'
  | 'ucs-2'
  | 'base64'
  | 'base64url'
  | 'latin1'
  | 'binary'
  | 'hex';

/**
 * The data type is like a buffer.
 */
export type BufferLike = ArrayBuffer |
  Uint8Array |
  Uint16Array |
  Uint32Array |
  BigUint64Array |
  Int8Array |
  Int16Array |
  Int32Array |
  BigInt64Array;


/**
 * The data type represents a file or directory path.
 */
export type PathLike = string |
  URL |
  BufferLike;
