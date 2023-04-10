import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {RhService} from "../../core/services/rh.service";
import {LeaveRequest} from "../../core/models/LeaveRequest";

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit{
  tab: string = "tab1";
  // request!: LeaveRequest;
  // requests!: LeaveRequest[];
  // private solde!: Object;




  constructor(private http: HttpClient,
              private router: Router,
              private rhService: RhService
  ) {}

  ngOnInit(): void {
        // this.getRequests();
    }



}
