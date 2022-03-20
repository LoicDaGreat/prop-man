import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss'],
})
export class BookingDetailsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  editBooking() {
    this.router.navigate(['app/bookings/edit']);
  }
}
