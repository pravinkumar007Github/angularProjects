import { Input, Pipe } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { AddPaymentsComponent } from '../add-payments/add-payments.component';
import { paymentService } from '../payment.service';
import { FilterPipe } from '../Pipes/filter.pipe';



@Component({
  selector: 'app-list-payments',
  templateUrl: './list-payments.component.html',
  styleUrls: ['./list-payments.component.css']

  
})
export class ListPaymentsComponent implements OnInit {
  ViewMode:string = "";
  Name :string = ""
  Price : string = "";
  CardNumber : string = "";
  indexNumber: number = 0 ;
  ststusmessage = "";
  recordcount:string = "";
  recordstatus: string = "";
  ddlload = "Name";
  searchvalue = "";
  searchtype = "";
  searchdata = "";
  @Input() set searchType (value:string)
  {
    this.searchtype = value;

  }
  @Input() set searchData (value:string)
  {

    this.searchdata = value;
    this.filter(this.searchtype,this.searchdata);
 
  }




  constructor(public listPayment :paymentService) {
    
   }
   paymentList : any = this.listPayment.getPayment();
   
   

  ngOnInit(): void {
  }

  enableEdit(Name:string,Price:string,CardNumber:string,index:number)
  {
    this.Name = Name;
    this.Price = Price;
    this.CardNumber = CardNumber;
    this.indexNumber = index;
    this.ViewMode = "visisble"
  
  }
  editPayment(Name:string,Price:string,CardNumber:string)
  {
    this.listPayment.editPayment(Name,Price,CardNumber,this.indexNumber);
    this.ststusmessage = "Updated";
  }

 confirmdelete(indexArray:number)
 {
   this.indexNumber = indexArray;
 }
  
  deletePayment()
  {
    
    this.listPayment.deletePaymentDetails(this.indexNumber)
    this.searchvalue = "";
    
    this.ststusmessage = "Deleted";

  }

  filter(ddlvalue:string,searchvalue:string)
  {
   
      let filterpipe = new FilterPipe()
      filterpipe.transform(this.listPayment,ddlvalue,searchvalue)
   

  }
 


}
