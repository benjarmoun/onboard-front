import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-request-leave-form',
  templateUrl: './request-leave-form.component.html',
  styleUrls: ['./request-leave-form.component.css']
})
export class RequestLeaveFormComponent implements OnInit{

  // message: string;

  startDate: any;

  receiveMessage(rangeDate: object) {
    console.log(rangeDate)
  }

  ngOnInit(): void {
    console.log(this.startDate)
  }


}
