import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {RhService} from "../../core/services/rh.service";
import {Employee} from "../../core/models/Employee";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  public hidden: boolean = true;
  fname!: string;
  lname!: string;
  contractType!: string;
  role!: string;
  salary!: string;
  function!: string;
  employee!: Employee;

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
