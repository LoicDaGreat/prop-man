import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
})
export class BookingListComponent implements OnInit {
  items;
  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation().extras.state.items);

    this.items = this.router.getCurrentNavigation().extras.state.items;
  }

  ngOnInit() {
    // this.items = { ...this.router.getCurrentNavigation().extras.state.items };
    console.log(this.items);
  }
}
