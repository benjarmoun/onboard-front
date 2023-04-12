import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {RhService} from "../../core/services/rh.service";
import Swal from "sweetalert2";



@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent {

  fname!: string;
  lname!: string;
  email!: string;
  password!: string;
  phone!: string;
  address!: string;
  role: string="";

  amount!: number;
  accountNumber!: string;

  constructor(private http: HttpClient,
              private router: Router,
              private rhService: RhService
  ) {}
  register(){
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const formData = {
      "fname": this.fname,
      "lname": this.lname,
      "email": this.email,
      "password": this.password,
      "phone": this.phone,
      "address": this.address,
      "role": this.role
    };
    console.log(formData)


      this.rhService.registerEmployee(formData,headers)
        .subscribe(response => {
          console.log(response);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Employee Added',
            showConfirmButton: false,
            timer: 1500,
            width: 350,
            heightAuto : false
          })
        });
  }

}
