import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inactiveproduct',
  templateUrl: './inactiveproduct.component.html',
  styleUrls: ['./inactiveproduct.component.css']
})
export class InactiveproductComponent implements OnInit {
  inactive_productive_list = ["Rebook","Adidas","Nike","Puma"]
  @Input() set move_inaactive_data(val:string)
  {
    if(val != "")
    {
      this.inactive_productive_list.push(val);
    }
    
  }

 @Output() move_active_data = new EventEmitter()
  
  
  constructor() { 
   

  }

  movetoactive(indexnum:number,value:string)
  {
     this.inactive_productive_list.splice(indexnum,1)
     this.move_active_data.emit(value)
  }

  ngOnInit(): void {
  }

}
