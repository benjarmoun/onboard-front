import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {Employee} from "../models/Employee";
import {Observable} from "rxjs";
import {LeaveRequest} from "../models/LeaveRequest";

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

  getRequests(headers: Object): Observable<LeaveRequest[]>{
    //@ts-ignore
    return this.http.get(this.apiUrl.getRequests,{headers})
  }


  getSoldeByEmpId(headers: Object, id: number): Observable<Object>{
    //@ts-ignore
    return this.http.get(this.apiUrl.soldByEmpId+''+id,{headers})
  }


  confirmRequestById(headers: Object, id: number): Observable<String> {
    //@ts-ignore
    return this.http.get(this.apiUrl.confirmRequestById+''+id,{headers, responseType: "text"})
  }
  rejectRequestById(headers: Object, id: number): Observable<String> {
    //@ts-ignore
    return this.http.get(this.apiUrl.rejectRequestById+''+id,{headers, responseType: "text"})
  }
  deleteRequestById(headers: Object, id: number): Observable<String> {
    //@ts-ignore
    return this.http.delete(this.apiUrl.deleteRequestById+''+id,{headers, responseType: "text"})
  }

  getUpcoming(headers: Object): Observable<LeaveRequest[]>{
    //@ts-ignore
    return this.http.get(this.apiUrl.getUpcoming,{headers})
  }
}
