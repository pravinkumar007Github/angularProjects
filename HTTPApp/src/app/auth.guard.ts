import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public usrSrv:UserService, public Redirect:Router){

  }
  canActivate(): boolean {
    if(!this.usrSrv.isLoggedIn())
    {
         this.Redirect.navigateByUrl("/")
    }
  return  this.usrSrv.isLoggedIn()
  }
  
}
