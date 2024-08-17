import { User } from "./User.model";
export class Message {
 constructor(
 public MessageId: number,
 public SenderId: number,
 public messag: string) { }
}
