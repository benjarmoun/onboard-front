import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {RhService} from "../../core/services/rh.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-request-leave-form',
  templateUrl: './request-leave-form.component.html',
  styleUrls: ['./request-leave-form.component.css']
})
export class RequestLeaveFormComponent implements OnInit{

  type: string = "";
  period!:{
    endDate:string,
    startDate:string
  }

  constructor(private http: HttpClient,
              private router: Router,
              private rhService: RhService
  ) {}

  receiveMessage(rangeDate: {
    endDate:string,
    startDate:string
  }) {
    this.period = rangeDate;
  }

  ngOnInit(): void {
  }


  requestLeave() {
    // console.log(this.period.startDate)
    // console.log(this.period.endDate)

    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const formData = {
      "startDate": this.period.startDate,
      "endDate": this.period.endDate,
      "type": this.type
    };
    console.log(formData)


    this.rhService.createLeaveRequest(formData,headers)
      .subscribe(response => {
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Request created',
          showConfirmButton: false,
          timer: 1500,
          width: 350,
          heightAuto : false
        })
      });
  }
}
