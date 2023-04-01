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

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    EmployeeDetailsComponent,
    RegisterEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
