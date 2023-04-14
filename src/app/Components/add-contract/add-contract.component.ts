import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {RhService} from "../../core/services/rh.service";
import Swal from "sweetalert2";
import {Employee} from "../../core/models/Employee";

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit{

  employees!: Employee[];
  employeeId: any = "";
  fonction!: string;
  type: string = "CDI";
  salary!: number;
  startDate!: string;
  endtDate!: string;

  accountNumber!: string;
  CDI: boolean = true;

  constructor(private http: HttpClient,
              private router: Router,
              private rhService: RhService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  addContract(){
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const formData = {
      "employeeId": this.employeeId,
      "fonction": this.fonction,
      "type": this.type,
      "salary": this.salary,
      "startDate": this.startDate,
      "endtDate": this.endtDate
    };
    console.log(formData)


    this.rhService.addContract(formData,headers)
      .subscribe(response => {
        console.log(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Contract Created',
          showConfirmButton: false,
          timer: 1500,
          width: 350,
          heightAuto : false
        })
        this.getEmployees();
      });
  }

  getEmployees(){
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.getEmployeesWithNoContract(headers).subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);

      }
    )
  }


  displayEndDate(type: string) {
    if(type == "CDD" || type == "Freelance")
      this.CDI = false
    else this.CDI = true
  }
}
