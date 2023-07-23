import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  User_Name : string = "";
  Msg:string = "";

  isDisable_create : boolean = false;

  isDisable_clear : boolean = false;

  constructor() {}

  createUser()
  {
    this.Msg = "Welcome "+ this.User_Name;
    this.isDisable_clear = true;
  }

 clearValues()
 {
   this.User_Name = "";
   this.isDisable_create = false;
   this.isDisable_clear = false;
 }
 enableButton()
 {
   if(this.User_Name.length >4)
   {
    this.isDisable_create = true;
   }
   else
   {
    this.isDisable_create = false;
    this.isDisable_clear = false;
   }
   
 }

  ngOnInit(): void {
  }

 

}
