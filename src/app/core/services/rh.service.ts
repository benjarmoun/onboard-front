import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {Employee} from "../models/Employee";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RhService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  registerCustomer(employee: Object, headers: Object): Observable<String> {
    //@ts-ignore
    return this.http.post(this.apiUrl.registerEmployee, employee, {headers,responseType: "text"});
  }

  getEmployee(headers: Object): Observable<Employee>{
    //@ts-ignore
    return this.http.get<Account>(this.apiUrl.getEmployee,{headers})
  }






}
