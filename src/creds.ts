import Constants from './constants';
import type { MountableFilesystem } from './filesystem';
import type { Stats } from './stats';

export type FilesystemOperation = 'read' | 'write'  | 'execute';

/**
 * Function to validate credentials or can also change credentials (only temporarily).
 */
export type PermissionValidator = (
  creds: Creds,
  stats: Stats,
  operation: FilesystemOperation,
  fs: MountableFilesystem,
) => Promise<PermissionValidatorResult> | PermissionValidatorResult;

export type PermissionValidatorResult = {
  ok: boolean,
  creds?: Creds | undefined,
};

/**
 * Class that represents credentials
 */
export class Creds {
  public uid: number;
  public gid: number;
  public suid: number;
  public sgid: number;
  public euid: number;
  public egid: number;

  public constructor(uid: number, gid: number, suid: number, sgid: number, euid: number, egid: number) {
    this.uid = uid;
    this.gid = gid;
    this.suid = suid;
    this.sgid = sgid;
    this.euid = euid;
    this.egid = egid;
  }
}
