export class UserFile {
 constructor(
 public UserFileId: number,
 public UsId: number,
 public Task: string,
 public Language: string,
 public url: string,
 public Univer?: string,
 public Curs?: number,
 public Facultet?: string,
 public Spetsialnots?:string,
 public Ticher?: string,
 ) { }
}