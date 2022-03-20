import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finances-overview',
  templateUrl: './finances-overview.component.html',
  styleUrls: ['./finances-overview.component.scss'],
})
export class FinancesOverviewComponent implements OnInit {
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
