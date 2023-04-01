import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  private isLogedCst: boolean = false;
  private isLogedAg: boolean = false;
  public isOn: boolean = false

  constructor(private router: Router) {}

  ngOnInit() {
    if(localStorage.getItem("employee") != null){
      this.isLogedCst = true;
    }else{
      this.router.navigate(['/login']).then();
    }
  }
  logout(){
    localStorage.removeItem("employee");
    localStorage.removeItem("token");
    this.isLogedCst = false;
    this.router.navigate(["/login"]).then();
  }

  on() {
    this.isOn = !this.isOn;
  }
}
