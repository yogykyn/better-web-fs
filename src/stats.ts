import Constants from './constants';

/**
 * Class returned by the fs.stat function.
 */
export class Stats {
  public constructor(
    public dev: number,
    public ino: number,
    public mode: number,
    public nlink: number,
    public uid: number,
    public gid: number,
    public rdev: number,
    public size: number,
    public blksize: number,
    public blocks: number,
    public atimeMs: number,
    public mtimeMs: number,
    public ctimeMs: number,
    public birthtimeMs: number,
    public atime: Date,
    public mtime: Date,
    public ctime: Date,
    public birthtime: Date,
  ) {}

  public isBlockDevice(): boolean {
    return (this.mode & Constants.S_IFBLK) !== 0;
  }

  public isCharacterDevice(): boolean {
    return (this.mode & Constants.S_IFCHR) !== 0;
  }

  public isDirectory(): boolean {
    return (this.mode & Constants.S_IFDIR) !== 0;
  }

  public isFIFO(): boolean {
    return (this.mode & Constants.S_IFIFO) !== 0;
  }

  public isFile(): boolean {
    return (this.mode & Constants.S_IFREG) !== 0;
  }

  public isSocket(): boolean {
    return (this.mode & Constants.S_IFSOCK) !== 0;
  }

  public isSymbolicLink(): boolean {
    return (this.mode & Constants.S_IFLNK) !== 0;
  }
}

/**
 * Class returned by the fs.stat function in bigint.
 */
export class BigIntStats {
  public constructor(
    public dev: bigint,
    public ino: bigint,
    public mode: bigint,
    public nlink: bigint,
    public uid: bigint,
    public gid: bigint,
    public rdev: bigint,
    public size: bigint,
    public blksize: bigint,
    public blocks: bigint,
    public atimeimeMs: bigint,
    public mtimeMs: bigint,
    public ctimeMs: bigint,
    public birthtimeMs: bigint,
    public atimeimeNs: bigint,
    public mnumberimeNs: bigint,
    public cnumberimeNs: bigint,
    public birthtimeNs: bigint,
    public atime: Date,
    public mtime: Date,
    public ctime: Date,
    public birthtime: Date,
  ) {}

  public isBlockDevice(): boolean {
    return (this.mode & BigInt(Constants.S_IFBLK)) !== BigInt(0);
  }

  public isCharacterDevice(): boolean {
    return (this.mode & BigInt(Constants.S_IFCHR)) !== BigInt(0);
  }

  public isDirectory(): boolean {
    return (this.mode & BigInt(Constants.S_IFDIR)) !== BigInt(0);
  }

  public isFIFO(): boolean {
    return (this.mode & BigInt(Constants.S_IFIFO)) !== BigInt(0);
  }

  public isFile(): boolean {
    return (this.mode & BigInt(Constants.S_IFREG)) !== BigInt(0);
  }

  public isSocket(): boolean {
    return (this.mode & BigInt(Constants.S_IFSOCK)) !== BigInt(0);
  }

  public isSymbolicLink(): boolean {
    return (this.mode & BigInt(Constants.S_IFLNK)) !== BigInt(0);
  }
}

/**
 * Class returned by the fs.statfs function.
 */
export class StatFs {
  public constructor (
    public type: number,
    public bsize: number,
    public blocks: number,
    public bfree: number,
    public bavail: number,
    public files: number,
    public ffree: number
  ) {}
}

/**
 * Class returned by the fs.statfs function in bigint.
 */
export class BigIntStatFs {
  public constructor (
    public type: bigint,
    public bsize: bigint,
    public blocks: bigint,
    public bfree: bigint,
    public bavail: bigint,
    public files: bigint,
    public ffree: bigint
  ) {}
}