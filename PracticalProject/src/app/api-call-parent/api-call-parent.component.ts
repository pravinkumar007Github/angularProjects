import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-api-call-parent',
  templateUrl: './api-call-parent.component.html',
  styleUrls: ['./api-call-parent.component.css']
})
export class ApiCallParentComponent implements OnInit {

  UserDetails:any = [];
  childUserDetails:any = [];

  isvisible = false;
  

  constructor(ajaxcall : HttpService) { 
    ajaxcall.sendGetRequest().subscribe((responseBody) => {
    
      let json = JSON.stringify(responseBody);
      let jsonobj = JSON.parse(json);
      let ResponseText = jsonobj.ResponseText;
      let Status = jsonobj.Status;
      let Result = jsonobj.Result;
      for(var i = 0;i<Result.length;i++)
      {
        if(ResponseText == "Successfully" && Status == "Success")
        {
          this.UserDetails.push({'Name':Result[i].Name,'Gender':Result[i].Gender,'Mobile':Result[i].Mobile,'Email':Result[i].Email,'Address':Result[i].Address})
        }
        
      }
      
});

console.log(this.UserDetails)

  }

  sendchilddata(indexnumber:number)
  {
     this.isvisible = true;
     if(this.childUserDetails.length == 0)
     {
      this.childUserDetails.push({'Name':this.UserDetails[indexnumber].Name,'Gender':this.UserDetails[indexnumber].Gender,'Mobile':this.UserDetails[indexnumber].Mobile,'Email':this.UserDetails[indexnumber].Email,'Address':this.UserDetails[indexnumber].Address})
     }
     else
     {
      this.childUserDetails = [];
      this.childUserDetails.push({'Name':this.UserDetails[indexnumber].Name,'Gender':this.UserDetails[indexnumber].Gender,'Mobile':this.UserDetails[indexnumber].Mobile,'Email':this.UserDetails[indexnumber].Email,'Address':this.UserDetails[indexnumber].Address})
     }
    
     

  }

  ngOnInit(): void {
  }

}
