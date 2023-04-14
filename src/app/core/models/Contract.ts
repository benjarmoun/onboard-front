import {Employee} from "./Employee";

export interface Contract {
  id: number,
  salary: String,
  type: String,
  fonction: String,
  startDate: Date,
  endDate: Date,
  employee: Employee,
}
