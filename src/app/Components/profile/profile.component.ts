import {Component, OnInit} from '@angular/core';
import {Employee} from "../../core/models/Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {RhService} from "../../core/services/rh.service";
import {Contract} from "../../core/models/Contract";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  public hidden: boolean = true;
  fname!: string;
  lname!: string;
  contractType!: string;
  role!: string;
  salary!: string;
  function!: string;
  employee: Employee = new class implements Employee {
    address!: String;
    contract!: Contract;
    email!: String;
    fname!: String;
    id!: number;
    lname!: String;
    password!: String;
    phone!: String;
    role!: String;
  };

  constructor(private http: HttpClient,
              private router: Router,
              private rhService: RhService
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    this.fname = JSON.parse(localStorage.getItem('employee')).fname;
    // @ts-ignore
    this.lname = JSON.parse(localStorage.getItem('employee')).lname;
    // @ts-ignore
    this.contractType = JSON.parse(localStorage.getItem('employee')).contract.type;
    // @ts-ignore
    this.salary = JSON.parse(localStorage.getItem('employee')).contract.salary;
    // @ts-ignore
    this.function = JSON.parse(localStorage.getItem('employee')).contract.fonction;
    // @ts-ignore
    this.contractType = JSON.parse(localStorage.getItem('employee')).contract.type;
    // @ts-ignore
    this.role = JSON.parse(localStorage.getItem('employee')).role;

    this.getAccount()
  }
  getAccount(){
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.getEmployee(headers).subscribe(
      (response: Employee) => {
        this.employee = response;
        console.log(this.employee)
      }
    )
  }

  hide() {
    this.hidden = !this.hidden;
  }
}
