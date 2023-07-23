import { Component, Directive, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListPaymentsComponent } from '../list-payments/list-payments.component';
import { paymentService } from '../payment.service';

@Component({
  selector: 'app-add-payments',
  templateUrl: './add-payments.component.html',
  styleUrls: ['./add-payments.component.css']
 

})
export class AddPaymentsComponent implements OnInit {

  name :string = ""
  price : string = "";
  cardnum : string = "";
  ststusmessage:string = "";
  error_message = "";
  Insert_status = "";
  cardtype:string = "";
  cardnumber:number = 0;
  cardnumber_valid:string = "";
  searchtype = "";
  searchdata = "";
  ddlload:string = "Name";
  
 
  constructor(public addpayment : paymentService) { }

  // addPayment(name:string,price:string,cardnumber:string)
  // {
  //    if(name.length == 0)
  //    {
  //        this.ststusmessage = "notvalid";
  //        this.error_message = "please enter the name......"
  //    }
  //    else if(price.length == 0)
  //    {
  //     this.ststusmessage = "notvalid";
  //     this.error_message = "please enter the price......"
  //    }
  //    else if(cardnumber.length == 0)
  //    {
  //     this.ststusmessage = "notvalid";
  //     this.error_message = "please enter the card number......"
  //    }
  //    else
  //    {
      
      
      
  //    }

     
  // }

  loadcard(cardnumber: string)
  {
     this.cardnumber = Number(cardnumber.substr(0,2))
     if(cardnumber.length != 0)
     {
      if(this.cardnumber <= 50)
      {
        this.cardtype = "master"
      }
      else
      {
       this.cardtype = "visa"
      }
     }
     else
     {
      this.cardtype = ""
     }

     if(this.cardnumber_valid.length == 4 || this.cardnumber_valid.length == 9 || this.cardnumber_valid.length == 14)
     {
      this.cardnumber_valid = cardnumber + "-";
     }
     
  }

  onFormSubmit(form:NgForm)
  {
    console.log("form submitted")
    console.log(form.value.usrname)
    this.addpayment.addPayment(form.value.usrname,form.value.prodprice,form.value.caednum);
    this.cardtype = ""
    this.ststusmessage = "Added";
  }
  searchfilter(ddlvalue:string,searchvalue:string)
  {
    this.searchtype = ddlvalue;
    this.searchdata = searchvalue;
     
  }

 

  ngOnInit(): void {
  }

}
