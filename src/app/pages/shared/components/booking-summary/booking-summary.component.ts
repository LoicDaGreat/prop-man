import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.scss'],
})
export class BookingSummaryComponent implements OnInit {
  @Input() booking;
  constructor(private router: Router) {}

  ngOnInit() {}

  viewBooking() {
    this.router.navigate(['app/bookings/details']);
  }
}
