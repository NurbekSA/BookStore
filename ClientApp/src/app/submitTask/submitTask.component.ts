import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { DataService } from "../dataServis";
import { User } from '../models/User.model';
const mailsUrl = "/api/mails";
const userUrl = "/api/user";
const taskUrl = "/api/submitTask";


@Component({
  selector: 'submitTask-root',
  templateUrl: './submitTask.component.html',
  styleUrls: ['./submitTask.component.css']
})

export class SubmitTaskComponent {
    curs:number;
    lang: string;
    task: string;
    cost: number;
    user:User;
    constructor(private dataService:DataService, private http: HttpClient){    }
    ngOnInit() {
        this.dataService.dataChanged.subscribe((data: User) => {
          this.user = data;
        });
      }
  
    enter(){
        const data = { UsId : this.user.UserId, Task : this.task, Cost : this.cost, Language: this.lang, Curs: this.curs};
          this.http.post(taskUrl, data).subscribe();
       
      }
      

}
