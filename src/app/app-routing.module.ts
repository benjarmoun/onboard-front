import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Pages/login/login.component";
import {HomeComponent} from "./Pages/home/home.component";
import {RegisterEmployeeComponent} from "./Components/register-employee/register-employee.component";
import {LeaveComponent} from "./Components/leave/leave.component";
import {AuthguardGuard} from "./authguard.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent
  },
  { path: 'home', component: HomeComponent ,
    canActivate:[AuthguardGuard]
  },
  { path: '', component: HomeComponent ,
    canActivate:[AuthguardGuard]
    , children:[
      {path: 'register', component: RegisterEmployeeComponent},
      {path: 'leave', component: LeaveComponent},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
