import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCardComponent } from './add-card/add-card.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { PaymentsComponent } from './payments/payments.component';

const paymentsRoutes: Routes = [
  { path: '', component: PaymentMethodsComponent },
  { path: 'add-payment', component: PaymentsComponent },
  { path: 'add-card', component: AddCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(paymentsRoutes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class PaymentsRoutingModule {}
