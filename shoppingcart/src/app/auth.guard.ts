import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserserviceService } from './userservice.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public usrSer :UserserviceService, public Redirect:Router){

  }
  canActivate():  boolean  {
   if(!this.usrSer.isLoggedIn())
   {
      this.Redirect.navigateByUrl("/login");
   }

   return this.usrSer.isLoggedIn()
  
  }
  
}
