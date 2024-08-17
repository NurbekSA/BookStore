import { UserFile } from "./UserFile.model";
import { Message } from "./Message.model";
import { Esep } from "./Esep.model";
export class User {
 constructor(
 public UserId: number,
 public Name : string,
 public login: string,
 public pass: string,
 public vbaks: number,
 public mb: number,
 public file?: UserFile,
 public esep?: Esep,
 public message?: Message,
 ) { }
}