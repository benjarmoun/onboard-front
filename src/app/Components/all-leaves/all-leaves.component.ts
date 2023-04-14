import {Component, OnInit} from '@angular/core';
import {LeaveRequest} from "../../core/models/LeaveRequest";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {RhService} from "../../core/services/rh.service";

@Component({
  selector: 'app-all-leaves',
  templateUrl: './all-leaves.component.html',
  styleUrls: ['./all-leaves.component.css']
})
export class AllLeavesComponent implements OnInit{

  request!: LeaveRequest;
  requests!: LeaveRequest[];
  private solde!: Object;

  constructor(private http: HttpClient,
              private router: Router,
              private rhService: RhService
  ) {}

  ngOnInit(): void {
    this.getUpcoming();
  }

  getUpcoming() {
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.getAllLeaves(headers).subscribe(
      (response: LeaveRequest[]) => {
        this.requests = response;
        console.log(response);

        // Map through each request and get the employee's leave solde
        // this.requests.forEach((request) => {
        //   const employeeId = request.employeeId;
        //   this.rhService.getSoldeByEmpId(headers, request.employeeId).subscribe(
        //     (response: Object) => {
        //       // @ts-ignore
        //       request.solde = response;
        //     }
        //   );
        // });
      }
    )
  }

  getLeaveSoldeByEmpId(headers: HttpHeaders, id: number) {
    this.rhService.getSoldeByEmpId(headers, id).subscribe(
      (response: Object) => {
        this.solde = response;
        console.log(response)
      }
    )
  }

  confirmRequest( id: number) {
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.confirmRequestById(headers, id).subscribe(
      (response: String) => {
        console.log(response)
        this.getUpcoming();
      }
    )

  }

  rejectRequest( id: number) {
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.rejectRequestById(headers, id).subscribe(
      (response: String) => {
        console.log(response)
        this.getUpcoming();
      }
    )

  }

  deleteRequest( id: number) {
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.deleteRequestById(headers, id).subscribe(
      (response: String) => {
        console.log(response)
        this.getUpcoming();
      }
    )

  }



  convertDateString(dateString: Date): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }


}


