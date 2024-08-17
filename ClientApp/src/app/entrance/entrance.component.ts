import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/User.model";
import { Router } from '@angular/router';
import { DataService } from "../dataServis";


const productsUrl = "/api/user";

@Component({
  selector: 'entrance-root',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent {
  user:User;
  login: string;
  pass: string;
  constructor(private http: HttpClient, private router: Router, private dataService: DataService) {
    this.login = "";
    this.pass ="";
  }
  Zapros(){
    let url = `${productsUrl}?log=${this.login}&pass=${this.pass}`;
    this.http.get<User>(url).subscribe(p => 
      {
        this.user = p;
        if(this.user != null){
          if(this.user.login == this.login && this.user.pass == this.pass){
            console.log("ia zhe ne null " , this.user.Name);
            this.dataService.updateData(this.user);
            this.router.navigate(['/Main']);
          }
        }
      });
    
  }
}
