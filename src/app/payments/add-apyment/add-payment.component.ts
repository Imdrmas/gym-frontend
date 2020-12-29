import { PaymentService } from './../../service/payment.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Payment } from 'src/app/model/Model';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {
  showProgressBar = false;
  payment: Payment = {} as Payment;

  constructor(public dialogRef: MatDialogRef<AddPaymentComponent>, @Inject(MAT_DIALOG_DATA) public data: any, 
  private paymentService: PaymentService) { }

  ngOnInit(): void {
  }
addPayment() {
  this.showProgressBar = true;
  this.paymentService.addPayment(this.payment, this.data.id).subscribe(payment => {
    this.payment = payment;
    window.location.reload();
  });
}
}
