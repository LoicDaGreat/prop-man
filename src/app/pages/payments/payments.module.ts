import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AddCardComponent } from './add-card/add-card.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments/payments.component';

@NgModule({
  imports: [IonicModule, CommonModule, PaymentsRoutingModule],
  exports: [],
  declarations: [PaymentsComponent, AddCardComponent, PaymentMethodsComponent],
  providers: [],
})
export class PaymentsModule {}
