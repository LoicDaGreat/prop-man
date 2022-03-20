import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  addCard() {
    this.router.navigate(['app/payments/add-card']);
  }
}
