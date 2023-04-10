import {Contract} from "./Contract";
import {Employee} from "./Employee";

export interface LeaveRequest {
  id:number,
  employeeId: number,
  numbOfDays: number,
  startDate: Date,
  endDate: Date,
  status: String,
  type: String,
  solde: {
    solde: number
  },
  employee: Employee;
}
