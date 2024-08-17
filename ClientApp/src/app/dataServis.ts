import { Injectable, EventEmitter } from '@angular/core';
import { User } from "./models/User.model";

@Injectable()
export class DataService {
  dataChanged: EventEmitter<User> = new EventEmitter();
  
  constructor() { }
  
  updateData(data: User) {
    this.dataChanged.emit(data);
    console.log("Pronlema ne vomne");
    console.log(data.Name);
  }
}
