import {Component, OnInit} from '@angular/core';
import {LeaveRequest} from "../../core/models/LeaveRequest";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {RhService} from "../../core/services/rh.service";
import Swal from "sweetalert2"

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.css']
})
export class LeaveRequestsComponent implements OnInit{

  request!: LeaveRequest;
  requests!: LeaveRequest[];
  private solde!: Object;

  constructor(private http: HttpClient,
              private router: Router,
              private rhService: RhService
  ) {}

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests() {
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.getRequests(headers).subscribe(
      (response: LeaveRequest[]) => {
        this.requests = response;
        console.log(this.requests);

        // Map through each request and get the employee's leave solde
        this.requests.forEach((request) => {
          const employeeId = request.employeeId;
          this.rhService.getSoldeByEmpId(headers, request.employeeId).subscribe(
            (response: Object) => {
              // @ts-ignore
              request.solde = response;
            }
          );
        });
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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Request confirmed',
          showConfirmButton: false,
          timer: 1500,
          width: 350,
          heightAuto : false
        })
        this.getRequests();
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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Request rejected',
          showConfirmButton: false,
          timer: 1500,
          width: 350,
          heightAuto : false
        })
        this.getRequests();
      }
    )

  }

  deleteRequest( id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // @ts-ignore
        const token = JSON.parse(localStorage.getItem('token'))
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
        this.rhService.deleteRequestById(headers, id).subscribe(
          (response: String) => {
            console.log(response)
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.getRequests();
          }
        )

      }
    })


  }



  convertDateString(dateString: Date): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }


}
