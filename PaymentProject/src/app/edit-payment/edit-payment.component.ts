import { Component, OnInit } from '@angular/core';
import { paymentService } from '../payment.service';

@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.css']
})
export class EditPaymentComponent implements OnInit {
  ViewMode :string = "";
  constructor(public editPayment:paymentService) { 
  
  }

  ngOnInit(): void {
    
  }

}
