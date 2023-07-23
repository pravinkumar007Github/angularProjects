import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-activeproduct',
  templateUrl: './activeproduct.component.html',
  styleUrls: ['./activeproduct.component.css']
})
export class ActiveproductComponent implements OnInit {
  active_product_list = ["Sansung","LG","Onida","Lenavo"]
  move_inactive_product:string = "";
  
  constructor() { }
 
 

  ngOnInit(): void {
  }
  movetoinactive(indexnum:number,value:string)
  {
    this.active_product_list.splice(indexnum,1)
    this.move_inactive_product = value;
  }

  move_active_product(value:string)
  {
    
     this.active_product_list.push(value)
  }

}
