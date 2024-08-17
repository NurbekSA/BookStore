import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from "./models/model.module";
import { EntranceComponent } from './entrance/entrance.component';
import { MainComponent } from './main/main.component';
import { MyTaskComponent } from './myTask/myTask.component';
import { FindSolutionComponent } from './findSolution/findSolution.component';
import { OfferSolutionsComponent } from './offerSolutions/offerSolutions.component';
import { RegistrationComponent } from './registration/registration.component';
import { WithdrawMoneyComponent } from './withdrawMoney/withdrawMoney.component';
import { FindTaskComponent } from './findTask/findTask.component';
import { DataService } from './dataServis';
import { SubmitTaskComponent } from "./submitTask/submitTask.component";



@NgModule({
  declarations: [    AppComponent, EntranceComponent,  MainComponent, MyTaskComponent, FindSolutionComponent, OfferSolutionsComponent, RegistrationComponent, WithdrawMoneyComponent , FindTaskComponent,SubmitTaskComponent ],
  imports: [    BrowserModule,    AppRoutingModule, ModelModule , FormsModule,HttpClientModule ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
