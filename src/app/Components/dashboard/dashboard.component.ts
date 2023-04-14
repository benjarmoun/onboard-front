import {Component, OnInit} from '@angular/core';
import {Employee} from "../../core/models/Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {RhService} from "../../core/services/rh.service";
import {LeaveRequest} from "../../core/models/LeaveRequest";
import {Contract} from "../../core/models/Contract";

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
  numberOfContracts!: number;
  numberOfRequests!: number;



  constructor(private http: HttpClient,
              private router: Router,
              private rhService: RhService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
    this.getLeaves();
    this.getContracts();
    this.getRequests();
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

  getContracts(){
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.getALLContracts(headers).subscribe(
      (response: Contract[]) => {
        this.numberOfContracts = response.length;
        console.log(this.numberOfContracts);

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

  getRequests() {
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.getRequests(headers).subscribe(
      (response: LeaveRequest[]) => {
        this.numberOfRequests = response.length;
        console.log(this.numberOfRequests);


      }
    )
  }
}
