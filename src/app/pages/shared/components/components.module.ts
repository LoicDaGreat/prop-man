import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';
import { PropertySummaryComponent } from './property-summary/property-summary.component';
import { TenantSummaryComponent } from './tenant-summary/tenant-summary.component';
import { TicketSummaryComponent } from './ticket-summary/ticket-summary.component';
import { TicketThreadComponent } from './ticket-thread/ticket-thread.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [IonicModule, CommonModule],
  exports: [
    InvoiceSummaryComponent,
    PropertySummaryComponent,
    TicketSummaryComponent,
    TicketThreadComponent,
    TenantSummaryComponent,
    TenantListComponent,
    BookingSummaryComponent,
    HeaderToolbarComponent,
    SearchBarComponent,
  ],
  declarations: [
    InvoiceSummaryComponent,
    PropertySummaryComponent,
    TicketSummaryComponent,
    TicketThreadComponent,
    TenantSummaryComponent,
    TenantListComponent,
    BookingSummaryComponent,
    HeaderToolbarComponent,
    SearchBarComponent,
  ],
  providers: [],
})
export class ComponetsModule {}
