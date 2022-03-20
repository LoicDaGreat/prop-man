import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent implements OnInit {
  tenants = [];

  constructor() {}

  ngOnInit() {
    for (let index = 1; index <= 20; index++) {
      this.tenants.push({
        name: 'Manoj Tenant',
        contactNumber: '078 999 1234',
        date: '22 / 04 / 2021',
      });
    }
  }
}
