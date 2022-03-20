import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss'],
})
export class TenantListComponent implements OnInit {
  @Input() tenants;

  constructor() {}

  ngOnInit() {}
}
