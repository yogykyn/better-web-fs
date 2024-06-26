namespace Constants {
  export const F_OK: number = 0;
  export const R_OK: number = 4;
  export const W_OK: number = 2;
  export const X_OK: number = 1;

  export const COPYFILE_EXCL: number = 1;
  export const COPYFILE_FICLONE: number = 2;
  export const COPYFILE_FICLONE_FORCE: number = 4;

  export const O_RDONLY: number = 0;
  export const O_WRONLY: number = 1;
  export const O_RDWR: number = 2;
  export const O_CREAT: number = 64;
  export const O_EXCL: number = 128;
  export const O_NOCTTY: number = 256;
  export const O_TRUNC: number = 512;
  export const O_APPEND: number = 1024;
  export const O_DIRECTORY: number = 65536;
  export const O_NOATIME: number = 262144;
  export const O_NOFOLLOW: number = 131072;
  export const O_SYNC: number = 1052672;
  export const O_DSYNC: number = 4096;
  export const O_DIRECT: number = 16384;
  export const O_NONBLOCK: number = 2048;
  export const UV_FS_O_FILEMAP: number = 0;

  export const S_IFMT: number = 61440;
  export const S_IFREG: number = 32768;
  export const S_IFDIR: number = 16384;
  export const S_IFCHR: number = 8193;
  export const S_IFBLK: number = 24576;
  export const S_IFIFO: number = 4096;
  export const S_IFLNK: number = 40960;
  export const S_IFSOCK: number = 49152;
  
  export const S_IRWXU: number = 448;
  export const S_IRUSR: number = 256;
  export const S_IWUSR: number = 128;
  export const S_IXUSR: number = 64;
  export const S_IRWXG: number = 56;
  export const S_IRGRP: number = 32;
  export const S_IWGRP: number = 16;
  export const S_IXGRP: number = 8;
  export const S_IRWXO: number = 7;
  export const S_IROTH: number = 4;
  export const S_IWOTH: number = 2;
  export const S_IXOTH: number = 1;

  export const S_ISUID = 2048;
  export const S_IGUID = 1024;
  export const S_ISVTX = 512;
}

export default Constants;
