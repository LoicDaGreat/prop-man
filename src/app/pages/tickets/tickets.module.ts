import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponetsModule } from '../shared/components/components.module';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { ReplyTicketComponent } from './reply-ticket/reply-ticket.component';
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets/tickets.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';

@NgModule({
  imports: [IonicModule, CommonModule, ComponetsModule, TicketsRoutingModule],
  exports: [RouterModule],
  declarations: [
    TicketsComponent,
    ViewTicketComponent,
    NewTicketComponent,
    ReplyTicketComponent,
  ],
  providers: [],
})
export class TicketsModule {}
