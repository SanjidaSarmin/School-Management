import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  gatewayForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.gatewayForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],  // 16-digit card number
      expiryMonth: ['', [Validators.required, Validators.min(1), Validators.max(12)]],  // MM between 1-12
      expiryYear: ['', [Validators.required, Validators.min(22), Validators.max(99)]],  // YY between 22-99
      cardHolder: ['', Validators.required]
    });
  }

  onGatewaySubmit() {
    if (this.gatewayForm.valid) {
      // Process payment gateway submission here
      console.log('Payment Submitted:', this.gatewayForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }

  onCancel() {
    this.gatewayForm.reset();
  }
  // '/dashboard/student/slist'
}
