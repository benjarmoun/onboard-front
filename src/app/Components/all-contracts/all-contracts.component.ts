import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee} from "../../core/models/Employee";
import {Contract} from "../../core/models/Contract";
import {Router} from "@angular/router";
import {RhService} from "../../core/services/rh.service";

@Component({
  selector: 'app-all-contracts',
  templateUrl: './all-contracts.component.html',
  styleUrls: ['./all-contracts.component.css']
})
export class AllContractsComponent {

  contracts!: Contract[];

  constructor(private http: HttpClient,
              private router: Router,
              private rhService: RhService
  ) {}

  ngOnInit(): void {
    this.getContracts();
  }



  getContracts(){
    // @ts-ignore
    const token = JSON.parse(localStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.rhService.getALLContracts(headers).subscribe(
      (response: Contract[]) => {
        this.contracts = response;
        console.log(this.contracts[0].endDate);
        console.log(this.contracts);

      }
    )
  }
}
