import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  UserName: string;
  UserPassword : string;
  UserEmail:string;
  UserMobile:string;

  constructor(public http : HttpClient) { }

  UserRegister(data:any)
  {
    console.log(data)
   return this.http.post<string>("http://localhost:3000/register",data)
  }
 
  UserLogin(data:any)
  {
    //console.log(data);
    return this.http.post<string>("http://localhost:3000/login",data)
   
  }

  isLoggedIn()
  {
    return !!localStorage.getItem("token");
  }

  getMyToken()
  {
    return localStorage.getItem("token");
  }
}
