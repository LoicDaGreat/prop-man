import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss'],
})
export class InvoiceDetailsComponent implements OnInit {
  invoices: any[] = [];
  constructor(private router: Router) {}

  ngOnInit() {
    for (let index = 1; index <= 20; index++) {
      this.invoices.push({
        propertyName: 'Prop Name ' + index,
        invoiceNumber: index + 3,
        amount: 8000,
        date: '22 / 04 / 2021',
      });
    }
  }
  startPayment() {
    this.router.navigate(['app/payments']);
  }

  ionViewWillEnter() {}
}
