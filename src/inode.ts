export const INODE_BYTES_LENGTH = 120;
export const INODE_BLOCK_POINTERS_LENGTHS = 15;
export const MAX_LINKS_COUNT = 65535;

/**
 * Class that represents inode
 * 
 * https://en.wikipedia.org/wiki/Inode
 */
export class INode {
  public mode: number;
  public uid: number;
  public gid: number;
  public size: bigint;
  public nlink: number = 2;
  public atime: bigint;
  public ctime: bigint;
  public mtime: bigint;
  public dtime: bigint;
  public crtime: bigint;
  public flags: number;
  public blockPointers: number[] = new Array(INODE_BLOCK_POINTERS_LENGTHS);

  public constructor(size: bigint, mode: number, uid: number, gid: number, flags: number) {
    this.size = size;
    this.mode = mode;
    this.uid = uid;
    this.gid = gid;
    this.flags = flags;

    const currentTime = BigInt(Date.now());
    this.atime = currentTime;
    this.ctime = currentTime;
    this.mtime = currentTime;
    this.crtime = currentTime;
    this.dtime = currentTime;

    for (let i = 0; i < INODE_BLOCK_POINTERS_LENGTHS; i++) {
      this.blockPointers[i] = 0;
    }
  }

  public static parseBuffer(buffer: ArrayBuffer): INode {
    const view = new DataView(buffer);
    const inode = new INode(
      view.getBigUint64(0x6, true),
      view.getUint16(0x0, true),
      view.getUint16(0x2, true),
      view.getUint16(0x4, true),
      view.getUint32(0x28, true),
    );
    inode.nlink = view.getUint16(0xE, true);
    inode.atime = view.getBigUint64(0x10, true);
    inode.ctime = view.getBigUint64(0x18, true);
    inode.mtime = view.getBigUint64(0x20, true);
    inode.dtime = view.getBigUint64(0x2C, true);
    inode.crtime = view.getBigUint64(0x34, true);

    for (let i = 0; i < INODE_BLOCK_POINTERS_LENGTHS; i++) {
      inode.blockPointers[i] = view.getUint32(0x3C + (4 * i), true);
    }

    return inode;
  }

  public toBuffer(): ArrayBuffer {
    const buffer = new ArrayBuffer(INODE_BYTES_LENGTH);
    const view = new DataView(buffer, 0x0, INODE_BYTES_LENGTH);
    view.setUint16(0x0, this.mode, true);
    view.setUint16(0x2, this.uid, true);
    view.setUint16(0x4, this.gid, true);
    view.setBigUint64(0x6, this.size, true);
    view.setInt16(0xE, this.nlink, true);
    view.setBigUint64(0x10, this.atime, true);
    view.setBigUint64(0x18, this.ctime, true);
    view.setBigUint64(0x20, this.mtime, true);
    view.setUint32(0x28, this.flags, true);
    view.setBigUint64(0x2C, this.dtime, true);
    view.setBigUint64(0x34, this.crtime, true);

    for (let i = 0; i < INODE_BLOCK_POINTERS_LENGTHS; i++) {
      view.setUint32(
        0x3C + (4 * i),
        this.blockPointers[i] ?? 0,
        true,
      );
    }

    return buffer;
  }
}
