import {Component, OnInit} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {Employee} from "../../core/models/Employee";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  employee!: Employee;

  ngOnInit(): void {
    // @ts-ignore
    this.employee = JSON.parse(localStorage.getItem('employee'))
    console.log(this.employee.role)
  }


}
