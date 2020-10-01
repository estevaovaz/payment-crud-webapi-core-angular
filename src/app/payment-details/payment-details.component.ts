import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from './shared/payment-detail.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  formData: PaymentDetail
  
  constructor() { }

  ngOnInit(): void {
  }

}
