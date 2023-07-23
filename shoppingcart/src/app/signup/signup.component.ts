import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  msg:string;
 
  constructor(public usrserv : UserserviceService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form:NgForm)
  {
    console.log(form.value.Username);
    this.usrserv.UserRegister(form.value).subscribe((data:string)=>{
      console.log(data);
      this.msg = data;
      form.reset();
    }, (error:any)=>{
      this.msg = "Something went wrong!";
    });
  }

}
