import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';

const invoicesRoutes: Routes = [
  { path: '', redirectTo: 'details', pathMatch: 'full' },
  { path: 'details', component: InvoiceDetailsComponent },
];

@NgModule({
  imports: [IonicModule, RouterModule.forChild(invoicesRoutes)],
  exports: [RouterModule],
  declarations: [InvoiceDetailsComponent],
  providers: [],
})
export class InvoicesModule {}
