import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserserviceService } from './userservice.service';

@Injectable()
export class TokeninterceptorService implements HttpInterceptor {


  constructor(public usrServ:UserserviceService) { }

  intercept(req:HttpRequest<any>,next:HttpHandler)
  {
    var tokenizedreq = req.clone({
      setHeaders:{
        myauthtoken:(this.usrServ.getMyToken())? this.usrServ.getMyToken():''
      }
    });
    console.log(tokenizedreq);
    return next.handle(tokenizedreq)
  }
}
