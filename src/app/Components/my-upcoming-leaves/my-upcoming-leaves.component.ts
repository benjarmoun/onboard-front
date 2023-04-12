import { Component } from '@angular/core';
import {LeaveRequest} from "../../core/models/LeaveRequest";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {RhService} from "../../core/services/rh.service";

@Component({
  selector: 'app-my-upcoming-leaves',
  templateUrl: './my-upcoming-leaves.component.html',
  styleUrls: ['./my-upcoming-leaves.component.css']
})
export class MyUpcomingLeavesComponent {

  request!: LeaveRequest;
  requests!: LeaveRequest[];

  constructor(private http: HttpClient,
              private router: Router,
              private rhService: RhService
  ) {}

  ngOnInit(): void {
    this.getMyUpcoming();
  }

  getMyUpcoming() {
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.getMyUpcoming(headers).subscribe(
      (response: LeaveRequest[]) => {
        this.requests = response;
        console.log(this.requests);
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
