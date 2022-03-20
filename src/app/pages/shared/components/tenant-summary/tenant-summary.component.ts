import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant-summary',
  templateUrl: './tenant-summary.component.html',
  styleUrls: ['./tenant-summary.component.scss'],
})
export class TenantSummaryComponent implements OnInit {
  @Input() tenant;

  constructor(private router: Router) {}

  ngOnInit() {}

  viewTenant() {
    this.router.navigate(['app/tenants/details']);
  }
}
