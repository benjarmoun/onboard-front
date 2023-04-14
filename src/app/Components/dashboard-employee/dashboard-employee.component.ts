import {Component, OnInit} from '@angular/core';
import {Employee} from "../../core/models/Employee";

@Component({
  selector: 'app-dashboard-employee',
  templateUrl: './dashboard-employee.component.html',
  styleUrls: ['./dashboard-employee.component.css']
})
export class DashboardEmployeeComponent implements OnInit{
  employee!: Employee;

  ngOnInit(): void {
    // @ts-ignore
    this.employee = JSON.parse(localStorage.getItem('employee'))
    console.log(this.employee.role)
  }

}
