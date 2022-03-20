import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss'],
})
export class ViewTicketComponent implements OnInit {
  ticket;

  ticketThreads = [1, 2, 3];
  constructor(private router: Router) {
    // console.log(this.router.getCurrentNavigation().extras.state);
    this.ticket = { ...this.router.getCurrentNavigation().extras.state.ticket };
    console.log(this.ticket);
  }

  ngOnInit() {}

  ionViewWillEnter() {}

  replyTicket() {
    this.router.navigate(['app/tickets/reply']);
  }
}
