import {Component, OnInit} from '@angular/core';
import {Employee} from "../../core/models/Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {RhService} from "../../core/services/rh.service";
import {LeaveRequest} from "../../core/models/LeaveRequest";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  employees!: Employee[];
  leaves!: LeaveRequest[];
  numberOfEmployees!: number;
  numberOfLeaves!: number;



  constructor(private http: HttpClient,
              private router: Router,
              private rhService: RhService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
    this.getLeaves();
  }

  getEmployees(){
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.getALLEmployees(headers).subscribe(
      (response: Employee[]) => {
        this.numberOfEmployees = response.length;
        console.log(this.numberOfEmployees);

      }
    )
  }

  getLeaves(){
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.getAllLeaves(headers).subscribe(
      (response: LeaveRequest[]) => {
        this.numberOfLeaves = response.length;
        console.log(this.numberOfLeaves);

      }
    )
  }
}
