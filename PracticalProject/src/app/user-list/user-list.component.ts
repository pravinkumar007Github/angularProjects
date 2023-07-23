import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  PassengerViewDetails:any = [];
  result:string;
  deleteresult:string;
  Name:string;
  Mobile:string;
  Age:string;
  UserId:string;

  constructor(public ajaxcall : HttpService) { 
 
   ajaxcall.getuserlist("All").subscribe((requestbody)=>{
    let json = JSON.stringify(requestbody);
    let jsonobj = JSON.parse(json);
     for(var i=0;i<jsonobj.length;i++)
     {
       this.PassengerViewDetails.push({'Id':jsonobj[i].Id,'Name':jsonobj[i].Name,'Mobile':jsonobj[i].Mobile,'Age':jsonobj[i].Age})
     }
   })

  }

  filteruser(data:string)
  {
    this.PassengerViewDetails = [];
    this.ajaxcall.filteruserlist("Filter",data).subscribe((requestbody)=>{
      let json = JSON.stringify(requestbody);
      let jsonobj = JSON.parse(json);
       for(var i=0;i<jsonobj.length;i++)
       {
         this.PassengerViewDetails.push({'Id':jsonobj[i].Id,'Name':jsonobj[i].Name,'Mobile':jsonobj[i].Mobile,'Age':jsonobj[i].Age})
       }
     })
  }

  BindUpdateData(Index:number,Id:string)
  {
      
    this.Name = this.PassengerViewDetails[Index].Name
    this.Mobile = this.PassengerViewDetails[Index].Mobile
    this.Age = this.PassengerViewDetails[Index].Age
    this.UserId = Id;
  }

  updatedata(Name:any,Mobile:any,Age:any)
  {
    var data = new FormData();
    data.append("Method_Name","Update");
    data.append("Id",this.UserId)
    data.append("Name",Name);
    data.append("Mobile",Mobile);
    data.append("Age",Age);
    this.ajaxcall.updateUsers(data).subscribe((responsebody)=>{
    console.log(responsebody);
    let json = JSON.stringify(responsebody);
    let jsonobj = JSON.parse(json);
    if(jsonobj.Status == "Success")
    {
      this.result = jsonobj.Result;
    }
    })
  }

  deleteUsersdata(Id:string)
  {
    var data = new FormData();
    data.append("Method_Name","Delete");
    data.append("Id",Id)
    this.ajaxcall.deleteUsers(data).subscribe((responsebody)=>{
      console.log(responsebody);
      let json = JSON.stringify(responsebody);
      let jsonobj = JSON.parse(json);
      if(jsonobj.Status == "Success")
      {
        this.deleteresult = jsonobj.Result;
      }
      })
  }
  
  ngOnInit(): void {
  }
 

}
