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
  numberOfLeavesEmp!: number;
  numberOfContracts!: number;
  numberOfRequests!: number;
  requestsNumb!: number;
  solde!: number;
  employee!: Employee;



  constructor(private http: HttpClient,
              private router: Router,
              private rhService: RhService
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    this.employee = JSON.parse(localStorage.getItem('employee'))
    console.log(this.employee.role)
    if(this.employee.role =="RH"){
      this.getEmployees();
      this.getLeaves();
      this.getContracts();
      this.getRequests();
    }else {
      this.getSolde();
      this.getLeavesEmp();
      this.getMyUpcoming();
    }
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

  getSolde() {
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.getSolde(headers).subscribe(
      (response: { solde:number }) => {
        this.solde = response.solde;
        console.log(response.solde);
      }
    )
  }

  getLeavesEmp(){
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.getMyLeaves(headers).subscribe(
      (response: LeaveRequest[]) => {
        this.numberOfLeavesEmp = response.length;
        console.log(this.numberOfLeavesEmp);

      }
    )
  }

  getMyUpcoming() {
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.getMyUpcoming(headers).subscribe(
      (response: LeaveRequest[]) => {
        this.requestsNumb = response.length;
        console.log(this.requestsNumb);
      }
    )
  }

  // getRequests() {
  //   // @ts-ignore
  //   const token = JSON.parse(localStorage.getItem('token'))
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });
  //   this.rhService.getRequests(headers).subscribe(
  //     (response: LeaveRequest[]) => {
  //       this.numberOfRequests = response.length;
  //       console.log(this.numberOfRequests);
  //     }
  //   )
  // }
}
