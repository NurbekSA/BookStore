import { Component } from '@angular/core';
import { DataService } from "../dataServis";
import { User } from '../models/User.model';

@Component({
  selector: 'main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private dataService: DataService){}

  data: User;

  ngOnInit() {
    this.dataService.dataChanged.subscribe((data: User) => {
      this.data = data;
      console.log(data.Name);
    });
  }
}
