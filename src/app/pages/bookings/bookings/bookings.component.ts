import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  date: string;
  type: 'string';
  dateRange: { from: string; to: string };

  items = [];

  constructor(private router: Router) {}

  ngOnInit() {
    for (let index = 1; index <= 20; index++) {
      this.items.push({
        propertyName: 'Prop Name ' + index,
        invoiceNumber: index + 3,
        amount: 8000,
        date: '22 / 04 / 2021',
      });
    }
  }

  viewAllBookings() {
    const navData: NavigationExtras = {
      state: {
        items: this.items,
      },
    };
    this.router.navigate(['app/bookings/list'], navData);
  }

  onChange($event) {
    console.log($event);
  }
}
