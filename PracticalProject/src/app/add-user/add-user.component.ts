import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(public ajax:HttpService) { }
   result:string;
  ngOnInit(): void {
  }

  saveData(Name:any,Mobile:any,Age:any)
  {
    var data = new FormData();
    data.append("Method_Name","Insert");
    data.append("Name",Name);
    data.append("Mobile",Mobile);
    data.append("Age",Age);
    this.ajax.addUsers(data).subscribe((responsebody)=>{
    console.log(responsebody);
    let json = JSON.stringify(responsebody);
    let jsonobj = JSON.parse(json);
    if(jsonobj.Status == "Success")
    {
      this.result = jsonobj.Result;
    }
    })
  }

}
