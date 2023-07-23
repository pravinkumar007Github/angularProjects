import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }
  valid:boolean = false;
  passvalid:boolean = false;
  ngOnInit() {
  }

  login(username:any,password:any)
  {
   if(username == null || username == "")
   {
     this.valid = true;
     this.passvalid = false;
   }
   else if(password == null || password == "")
   {
     this.valid = false;
     this.passvalid = true;
   }
   else
   {
    this.valid = false;
    this.passvalid = false;
    this.router.navigate(['/home'])
   }
   
  }
}
