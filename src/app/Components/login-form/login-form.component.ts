import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../core/services/authentication.service";
import {NgForm} from "@angular/forms";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthenticationService) {}

  ngOnInit(): void {
    if(localStorage.getItem("employee") != null){
      this.router.navigate(["/"]).then();
    }
  }

  login(agentForm: NgForm){
    console.log(agentForm.value);
    this.authService.agentLogin(agentForm.value).subscribe(
      (res: Object) => {
        console.log(res);
        // @ts-ignore
        localStorage.setItem("employee", JSON.stringify(res['employee']));
        // @ts-ignore
        localStorage.setItem("token", JSON.stringify(res['token']));
        this.router.navigate(["/"]).then();

      }, (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    )
  }

}
