import {Contract} from "./Contract";

export interface Employee {
  id: number,
  fname: String,
  lname: String,
  email: String,
  password: String,
  phone: String,
  address: String,
  role: String,
  contract: Contract
}
