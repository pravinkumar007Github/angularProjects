import { Component } from '@angular/core';
import { paymentService } from './payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [paymentService]
})
export class AppComponent {
  title = 'PaymentProject';
}
