import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddPaymentsComponent } from './add-payments/add-payments.component';
import { ListPaymentsComponent } from './list-payments/list-payments.component';
import { paymentService } from './payment.service';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { CardformatPipe } from './Pipes/cardformat.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';
import { FiltercountPipe } from './Pipes/filtercount.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddPaymentsComponent,
    ListPaymentsComponent,
    EditPaymentComponent,
    CardformatPipe,
    FilterPipe,
    FiltercountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [paymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
