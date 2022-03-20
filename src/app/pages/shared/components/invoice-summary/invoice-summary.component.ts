import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.scss'],
})
export class InvoiceSummaryComponent implements OnInit {
  @Input() invoice;
  constructor(private router: Router) {}

  ngOnInit() {}

  openInvoice() {
    console.log('openInvoice');

    this.router.navigate(['/app/invoices/details']);
  }
}
