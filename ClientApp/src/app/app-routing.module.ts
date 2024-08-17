import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceComponent } from './entrance/entrance.component';
import { MainComponent } from './main/main.component';
import { MyTaskComponent } from './myTask/myTask.component';
import { FindSolutionComponent } from './findSolution/findSolution.component';
import { OfferSolutionsComponent } from './offerSolutions/offerSolutions.component';
import { RegistrationComponent } from './registration/registration.component';
import { WithdrawMoneyComponent } from './withdrawMoney/withdrawMoney.component';
import { FindTaskComponent } from './findTask/findTask.component';
import { SubmitTaskComponent } from './submitTask/submitTask.component';

const routes: Routes = [
{ path: "", component: EntranceComponent },
 { path: "Main", component: MainComponent },
 { path: "MyTask", component: MyTaskComponent },
 { path: "FindSolution", component: FindSolutionComponent },
 { path: "OfferSolutions", component: OfferSolutionsComponent },
 { path: "Registration", component: RegistrationComponent },
 { path: "WithdrawMoney", component: WithdrawMoneyComponent },
 { path: "FindTask", component: FindTaskComponent },
 { path: "SubmitTask", component: SubmitTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
