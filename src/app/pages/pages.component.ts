import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-component',
  templateUrl: 'pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  items: any[] = [];
  constructor() {}

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

  segmentChanged(ev) {}
}
