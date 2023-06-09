import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {Employee} from "../models/Employee";
import {Observable} from "rxjs";
import {LeaveRequest} from "../models/LeaveRequest";
import {Contract} from "../models/Contract";

@Injectable({
  providedIn: 'root'
})
export class RhService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  registerEmployee(employee: Object, headers: Object): Observable<String> {
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

  getSolde(headers: Object): Observable<{ solde:number }>{
    //@ts-ignore
    return this.http.get(this.apiUrl.soldByEmp,{headers})
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

  createLeaveRequest(formData: { endDate: string; type: string; startDate: string }, headers: Object) {
    // @ts-ignore
    return this.http.post(this.apiUrl.requestLeave, formData, {headers,responseType: "text"});
  }

  getALLEmployees(headers: Object): Observable<Employee[]>{
    //@ts-ignore
    return this.http.get(this.apiUrl.getALLEmployees,{headers})
  }
  getALLContracts(headers: Object): Observable<Contract[]>{
    //@ts-ignore
    return this.http.get(this.apiUrl.getALLContracts,{headers})
  }
  getAllLeaves(headers: Object): Observable<LeaveRequest[]>{
    //@ts-ignore
    return this.http.get(this.apiUrl.allLeaves,{headers})
  }

  deleteEmployeeById(headers: Object, id: number): Observable<String> {
    //@ts-ignore
    return this.http.delete(this.apiUrl.deleteEmplById+''+id,{headers, responseType: "text"})
  }

  getMyUpcoming(headers: Object): Observable<LeaveRequest[]>{
    //@ts-ignore
    return this.http.get(this.apiUrl.getMyUpcoming,{headers})
  }
  getMyLeaves(headers: Object): Observable<LeaveRequest[]>{
    //@ts-ignore
    return this.http.get(this.apiUrl.getMyLeaves,{headers})
  }

  addContract(formData: { fonction: string; employeeId: number; type: string; salary: number; endtDate: string; startDate: string }, headers: Object) {
    // @ts-ignore
    return this.http.post(this.apiUrl.addContract, formData, {headers,responseType: "text"});
  }
  getEmployeesWithNoContract(headers: Object): Observable<Employee[]>{
    //@ts-ignore
    return this.http.get(this.apiUrl.EmployeesWithNoContract,{headers})
  }
}
