import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../dataServis";
import { User } from '../models/User.model';
import { UserFile } from '../models/UserFile.model';
const filesUrl = "/api/file";
class FileObj {
  fill: FormData;
  filldata: object;
  constructor(fill: FormData, filldata: object) {
      this.fill = fill;
      this.filldata = filldata;
  }
}
@Component({
  selector: 'entrance-root',
  templateUrl: './offerSolutions.component.html',
  styleUrls: ['./offerSolutions.component.css']
})
export class OfferSolutionsComponent {
  constructor(private http: HttpClient,private dataService:DataService) { }
  
  data: User;

  ngOnInit() {
    this.dataService.dataChanged.subscribe((data: User) => {
      this.data = data;
      console.log(data.Name);
    });
  }

  univer:string;
  curs:number;
  Facultet: string;
  spets:string;
  ticher:string;
  lang:string;
  Task:string;
  selectedFile: File;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile.name);
  }
  
  
  uploadFile() {
    const data = {UsId : 1, Task : this.Task,Language : this.lang,url : " ", Univer : this.univer, Curs : this.curs,Facultet : "",Spetsialnots: this.spets, Ticher: this.ticher};

    const formD = new FormData();
    formD.append('file', this.selectedFile, this.selectedFile.name);

    const DATA = {fill: formD, filldata: data};
    console.log("lksda");
    this.http.post('/api/file', DATA).subscribe((response) => {
      console.log(response);
    });
  }
  
}