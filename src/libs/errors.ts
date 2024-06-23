/**
 * https://www.man7.org/linux/man-pages/man3/errno.3.html
 */
export enum ERRNO {
  EPERM = 1,
  ENOENT = 2,
  EIO = 5,
  EBADF = 9,
  EACCES = 13,
  EBUSY = 16,
  EEXIST = 17,
  EXDEV = 18,
  ENODEV = 19,
  ENOTDIR = 20,
  EISDIR = 21,
  EINVAL = 22,
  ENFILE = 23,
  EFBIG = 27,
  ENOSPC = 28,
  ESPIPE = 29,
  EROFS = 30,
  EMLINK = 31,
  ENAMETOOLONG = 36,
  ENOSYS = 38,
  ENOTEMPTY = 39,
  ENOTSOCK = 88,
  EMSGSIZE = 90,
  ENOTSUP = 95,
};

export const ERROR_MESSAGES: {[code: string]: string} = {
  ENOENT: 'No such file or directory',
  EIO: 'Input/output error',
  EBADF: 'Bad file descriptor',
  EACCES: 'Permision denied',
  EBUSY: 'Device or resource busy',
  EEXIST: 'File exists',
  EXDEV: 'Invalid cross-device link',
  ENODEV: 'No such device',
  ENOTDIR: 'Not a directory',
  EISDIR: 'Is a directory',
  EINVAL: 'Invalid argument',
  ENFILE: 'Too many open files in system',
  EFBIG: 'File too large',
  ENOSPC: 'No space left on device',
  ESPIPE: 'Illegal seek',
  EROFS: 'Read-only file system',
  EMLINK: 'Too many links',
  ENAMETOOLONG: 'File name too long',
  ENOSYS: 'Function not implemented',
  ENOTEMPTY: 'Directory not empty',
  ENOTSOCK: 'Socket operation on non-socket',
  EMSGSIZE: 'Message too long',
  ENOTSUP: 'Operation not supported',
};

/**
 * Class that represents errors when calling a syscall.
 */
export class SyscallError extends Error {
  public errno: ERRNO;
  public code:  string;
  public syscall: string;
  public path: string;

  public constructor(
    errno: ERRNO,
    syscall: string,
    path: string,
  ) {
    super(`Error: ${ERRNO[errno]}}: ${ERROR_MESSAGES[errno]}, ${syscall} '${path}'`);

    this.errno = errno;
    this.code = ERRNO[errno];
    this.syscall = syscall;
    this.path = path;
  }
}

/**
 * Class that represents type errors with additional error codes
 */
export class TypeErrorWithCode extends TypeError {
  public code: string;
  public message: string;

  constructor(code: string, message: string) {
    super(`TypeError [${code}]: ${message}`)

    this.code = code;
    this.message = message;
  }
}
