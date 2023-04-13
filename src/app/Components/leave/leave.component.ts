import {Component, OnInit} from '@angular/core';
import {Employee} from "../../core/models/Employee";

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit{
  tab: string = "tab1";
  employee!: Employee;

  ngOnInit(): void {
    // @ts-ignore
    this.employee = JSON.parse(localStorage.getItem('employee'))
    console.log(this.employee.role)
  }



}
