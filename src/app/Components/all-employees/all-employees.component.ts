import { Component } from '@angular/core';
import {Employee} from "../../core/models/Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {RhService} from "../../core/services/rh.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {
  employees!: Employee[];
  tab: string = "tab1";



  constructor(private http: HttpClient,
              private router: Router,
              private rhService: RhService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.getALLEmployees(headers).subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);

      }
    )
  }

  removeEmployee(id: number) {

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
        this.rhService.deleteEmployeeById(headers, id).subscribe(
          (response: String) => {
            console.log(response)
            Swal.fire(
              'Deleted!',
              'The employee has been deleted.',
              'success'
            )
            this.getEmployees();
          }
        )

      }
    })



  }
}
