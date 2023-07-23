import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(public UsrSer:UserService,public Redirect:Router) { }

  msg:string = "";

  ngOnInit(): void {
  }

  checkuser(UserName:string,UserPass:string)
  {
      this.UsrSer.getUserDetails().subscribe((data:any[])=>{

        for(var i =0; i<data.length;i++)
        {
          if(data[i].UserName == UserName && data[i].UserPass == UserPass)
          {
         
            this.msg = "";
            this.Redirect.navigateByUrl("/dashboard");
            localStorage.setItem("Token","Logged");
            localStorage.setItem("UserName",UserName);
            return;
          }
          else
          {
            this.msg = "Invalid User Credentials. Please try again....!";
          }
         
        }
        

      },(error)=>{
       console.log(error)
      })
  }

}
