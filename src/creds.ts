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
