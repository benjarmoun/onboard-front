import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Pages/login/login.component";
import {HomeComponent} from "./Pages/home/home.component";
import {RegisterEmployeeComponent} from "./Components/register-employee/register-employee.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent, children:[
      {path: 'register', component: RegisterEmployeeComponent},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
