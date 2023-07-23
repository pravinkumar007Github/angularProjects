import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { UserserviceService } from '../userservice.service';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck {

  loginform: FormGroup;
  msg:string;

  constructor(public usrserv: UserserviceService, public Redirect:Router, public pdtSer:ProductsService ) { }

  

  ngOnInit(): void {

    this.loginform = new FormGroup({
      'Username' : new FormControl(null,Validators.required),
      'Password' : new FormControl(null,Validators.required)
    })

    $('.toggle').click(()=>{
      // Switches the Icon
      $(this).children('i').toggleClass('fa-pencil');
      // Switches the forms  
      $('.form').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"
      }, "slow");
    });
  }

  get userctrl()
  {
    return this.loginform.get("Username");
  }

  get passctrl()
  {
    return this.loginform.get("Password");
  }

  doLogin()
  {
    this.usrserv.UserLogin(this.loginform.value).subscribe((data:string)=>{
          console.log(data)
          if(data.length==0)
          {
            this.msg = "Invalid Login"
          }
          else
          {
            
            localStorage.setItem("token",data)
             this.pdtSer.getCartCount();
             this.Redirect.navigateByUrl("/");
          }
    },(error:any)=>{
      this.msg="Something went wrong";
    });
  }

  ngDoCheck()
  {
    
  }

 

}
