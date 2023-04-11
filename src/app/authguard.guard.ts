import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  private isLoged: boolean = false;
  private isLogedAg: boolean = false;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return  this.check();
  }

  check(){
    if(localStorage.getItem("employee") != null){
      this.isLoged = true;
      return true;
    }else{
      this.router.navigate(['/login']).then();
      return false;
    }
  }

}
