import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { ReplyTicketComponent } from './reply-ticket/reply-ticket.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';

const ticketsRoutes: Routes = [
  { path: '', component: TicketsComponent },
  { path: 'create', component: NewTicketComponent },
  { path: 'reply', component: ReplyTicketComponent },
  { path: 'details', component: ViewTicketComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ticketsRoutes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class TicketsRoutingModule {}
