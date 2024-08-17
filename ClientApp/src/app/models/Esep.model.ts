import { UserFile } from "./UserFile.model";
import { Message } from "./Message.model";
export class Esep {
 constructor(
 public EsepId: number,
 public UsId : string,
 public Task: string,
 public Cost: string,
 public Language: string,
 public Curs: number = 0,
 public Time: number = 200
) { }
}