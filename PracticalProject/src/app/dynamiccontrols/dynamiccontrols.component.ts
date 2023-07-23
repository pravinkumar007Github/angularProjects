import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
declare var swal:any
function MobileNumberValidator(control : FormControl) : {[key:string] : boolean}
{
   let MobileNumber = control.value;
   if( MobileNumber != null && (MobileNumber.length > 10 ||MobileNumber.length < 10 ))
   {
     return {mobileValid:true}
   }
   return null;
}


@Component({
  selector: 'app-dynamiccontrols',
  templateUrl: './dynamiccontrols.component.html',
  styleUrls: ['./dynamiccontrols.component.css']
})
export class DynamiccontrolsComponent implements OnInit {
  ListView:boolean;
  CreateView:boolean;
  controlload : FormGroup;
  MaxUsersValid :string;
  PassengerDetails:any = [{}];
  UsersLength: Number;
  PassengerViewDetails:any = [];
 

  constructor(public ajaxcall : HttpService)
   {
     
    ajaxcall.getPassengerDetailsRequest().subscribe((responseBody) => {
    
      let json = JSON.stringify(responseBody);
      let jsonobj = JSON.parse(json);
      let ResponseText = jsonobj.ResponseText;
      let Status = jsonobj.Status;
      let Result = jsonobj.Result;
      for(var i = 0;i<Result.length;i++)
      {
        if(ResponseText == "Successfully" && Status == "Success")
        {
          this.PassengerViewDetails.push({'PassangerName':Result[i].PassangerName,'PassengerMail':Result[i].PassengerMail,'PassengerPhone':Result[i].PassengerPhone})
        }
        
      }

      
      
});
     this.ListView = true;
     this.CreateView = false;
   }
  
 
  ngOnInit(): void {
    this.controlload = new FormGroup({
     'TotalUsers': new FormControl(null,[Validators.pattern("^(0|[1-9][0-9]*)$")]),
     'UsersName' : new FormArray([]),
     'UsersEmail' : new FormArray([]),
     'UsersMobile' : new FormArray([])
    })
  }

  get TotalUsers()
  {
    return this.controlload.get("TotalUsers");
  }

  get usernamectr()
  {
    return (<FormArray>this.controlload.get("UsersName")).controls;
  }
  loadcontrols(NumberUsers:string)
  {
   
    if(NumberUsers.length == 0)
    {
      this.controlload.reset();
      (<FormArray>this.controlload.get("UsersName")).controls = [];
      (<FormArray>this.controlload.get("UsersEmail")).controls = [];
      (<FormArray>this.controlload.get("UsersMobile")).controls = [];
      this.MaxUsersValid = ""
    }
 

    var TotalUsers: number = Number(NumberUsers);
     
    if(TotalUsers>5)
    {
      this.MaxUsersValid = "Exist"
    }
    else
    {
      this.UsersLength = TotalUsers;
      for(var i = 0; i<TotalUsers; i++)
      {
        this.MaxUsersValid = ""
        let control = new FormControl(null,Validators.required);
        let control1 = new FormControl(null,[Validators.required,Validators.email]);
        let control2 = new FormControl(null,[Validators.required,MobileNumberValidator]);
        
        (<FormArray>this.controlload.get("UsersName")).push(control);
        (<FormArray>this.controlload.get("UsersEmail")).push(control1);
        (<FormArray>this.controlload.get("UsersMobile")).push(control2);
       
      }
    }
  
    
  }

  get usernamevalid()
  {
    return (<FormArray>this.controlload.get("UsersName")).controls;
  }

  get useremailvalid()
  {
    return (<FormArray>this.controlload.get("UsersEmail")).controls;
  }

  get userMobileValid()
  {
    return (<FormArray>this.controlload.get("UsersMobile")).controls;
  }

  clearvalues()
  {
    (<FormArray>this.controlload.get("UsersName")).controls = [];
    (<FormArray>this.controlload.get("UsersEmail")).controls = [];
    (<FormArray>this.controlload.get("UsersMobile")).controls = [];
    this.PassengerDetails = [];
  }
  doSave()
  {
    this.PassengerDetails = [];
    for(var i = 0; i<this.UsersLength ;i++ )
    { 
      this.PassengerDetails.push({"UsersName":this.controlload.value.UsersName[i],"UsersEmail":this.controlload.value.UsersEmail[i],"UsersMobile":this.controlload.value.UsersMobile[i]});
    }
   
  }
  SaveData()
  {
    let ResponseText = "";
    let Status = "";
    
    for(var i= 0; i<this.PassengerDetails.length;i++)
    {
      var data = {
        "UserName" : this.PassengerDetails[i].UsersName,
        "UserEmail": this.PassengerDetails[i].UsersEmail,
        "UserMobile" : this.PassengerDetails[i].UsersMobile
      };
     this.ajaxcall.postdata(data).subscribe((responseBody) => {
      let json = JSON.stringify(responseBody);
      let jsonobj = JSON.parse(json);
      ResponseText = jsonobj.ResponseText;
      Status = jsonobj.Status;
      
     });
    }

    if(ResponseText == "Data Inserted Successfully" && Status == "Success")
      {
        console.log("Data Saved")
      }

      swal({
        title: "Message",
        text: "Successfully Saved Data...!",
        icon: "success",
    }).then( () => {

    //   this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
    //     this.router.navigate(['Your actualComponent']);
    // }); 
        
    window.location.reload();
    });
     
  }

 AddViewEnable()
 {
   this.ListView = false;
   this.CreateView = true;
 }

}


