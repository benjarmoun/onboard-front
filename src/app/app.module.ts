import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { RegisterEmployeeComponent } from './Components/register-employee/register-employee.component';
import { LeaveComponent } from './Components/leave/leave.component';
import { LeaveRequestsComponent } from './Components/leave-requests/leave-requests.component';
import { LeavesUpcomingComponent } from './Components/leaves-upcoming/leaves-upcoming.component';
import { AllLeavesComponent } from './Components/all-leaves/all-leaves.component';
import { RequestLeaveFormComponent } from './Components/request-leave-form/request-leave-form.component';
import {DatepickerComponent} from "./Components/datepicker/datepicker.component";
import { EmployeesComponent } from './Components/employees/employees.component';
import { MyLeavesComponent } from './Components/my-leaves/my-leaves.component';
import { MyUpcomingLeavesComponent } from './Components/my-upcoming-leaves/my-upcoming-leaves.component';
import { AllEmployeesComponent } from './Components/all-employees/all-employees.component';
import { AddContractComponent } from './Components/add-contract/add-contract.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AllContractsComponent } from './Components/all-contracts/all-contracts.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { DashboardEmployeeComponent } from './Components/dashboard-employee/dashboard-employee.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginFormComponent,
        LoginComponent,
        HomeComponent,
        HeaderComponent,
        EmployeeDetailsComponent,
        RegisterEmployeeComponent,
        LeaveComponent,
        LeaveRequestsComponent,
        LeavesUpcomingComponent,
        AllLeavesComponent,
        AllLeavesComponent,
        RequestLeaveFormComponent,
        DatepickerComponent,
        EmployeesComponent,
        MyLeavesComponent,
        MyUpcomingLeavesComponent,
        AllEmployeesComponent,
        AddContractComponent,
        DashboardComponent,
        ProfileComponent,
        AllContractsComponent,
        DashboardEmployeeComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
    NgxUiLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
