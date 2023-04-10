import {Contract} from "./Contract";
import {Employee} from "./Employee";

export interface LeaveRequest {
  employeeId: number,
  numbOfDays: number,
  startDate: Date,
  endDate: Date,
  status: String,
  type: String
  employee: Employee;
}
