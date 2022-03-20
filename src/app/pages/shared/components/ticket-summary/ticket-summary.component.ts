import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-summary',
  templateUrl: './ticket-summary.component.html',
  styleUrls: ['./ticket-summary.component.scss'],
})
export class TicketSummaryComponent implements OnInit {
  @Input() ticket;
  constructor(private router: Router) {}

  ngOnInit() {}

  viewTicket() {
    const navData: NavigationExtras = {
      state: {
        ticket: this.ticket,
      },
    };
    this.router.navigate(['app/tickets/details'], navData);
  }
}
