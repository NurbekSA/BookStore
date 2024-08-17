import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { DataService } from "../dataServis";
import { User } from '../models/User.model';
const mailsUrl = "/api/mails";
const userUrl = "/api/user";

@Component({
  selector: 'registration-root',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  constructor(private http: HttpClient, private router: Router, private dataService: DataService) {}
  name:string;
  mail:string;
  login:string;
  pass1:string;
  pass2:string;
  kod:string;
  private t: string = "fhbssdkjfwb%hbfsh&fhs29y345y$27yhfjksbf6T*^7yq7ys";
  private user: User;
  sendEmail() {
    const random1 = Math.floor(Math.random() * 10) + 1;
    const random2 = Math.floor(Math.random() * 10) + 1;
    const random3 = Math.floor(Math.random() * 10) + 1;
    const random4 = Math.floor(Math.random() * 10) + 1;
    const random5 = Math.floor(Math.random() * 10) + 1;
    const random6 = Math.floor(Math.random() * 10) + 1;
    this.t = ""+random1+random2+random3+random4+random5+random6;

    const data = { ToAddress : this.mail, Subject : "Код подтверждения", Body : this.t };
    this.http.post(mailsUrl, data).subscribe();
  } 
  enter(){
    if(this.t == this.kod){
      const data = { Name : this.name, login : this.login, pass : this.pass1, vbaks: 0, mb: 200};
      this.http.post<User>(userUrl, data).subscribe(x => this.user = x);
      if(this.kod == this.t){
        this.dataService.updateData(this.user);
        this.router.navigate(['/Main']);
      }
    }
   
  }
  
}
