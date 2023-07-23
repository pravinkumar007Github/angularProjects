import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-apicallchild',
  templateUrl: './apicallchild.component.html',
  styleUrls: ['./apicallchild.component.css']
})
export class ApicallchildComponent implements OnInit, DoCheck {
  Name:string = "";
  Gender:string = "";
  Mobile:string = "";
  Email:string = "";
  Address:string = "";
  
  constructor() { }

 @Input() set childData (value:any)
 {
   this.Name = value[0].Name;
   this.Gender = value[0].Gender
   this.Mobile = value[0].Mobile
   this.Email = value[0].Email
   this.Address = value[0].Address
  
   
 }

  ngOnInit(): void {
  }
  
  ngDoCheck()
  {
    
  }

}
