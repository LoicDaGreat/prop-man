import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  tickets = [];
  ticketTypes = ['Maintanance', 'Complaint', 'Security'];
  statuses = ['Open', 'In Progress', 'Closed'];
  constructor(private router: Router) {}

  ngOnInit() {
    for (let index = 1; index <= 20; index++) {
      this.tickets.push({
        type: this.ticketTypes[Math.floor(Math.random() * 2)],
        status: this.statuses[Math.floor(Math.random() * 2)],
        message: '',
        date: '22 / 04 / 2021',
      });
    }
  }

  createTicket() {
    this.router.navigate(['app/tickets/create']);
  }
}
