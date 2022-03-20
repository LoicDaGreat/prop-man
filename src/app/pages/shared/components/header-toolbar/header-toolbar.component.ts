/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss'],
})
export class HeaderToolbarComponent implements OnInit {
  buttons = [
    {
      name: 'notification',
      isVisible: false,
      routesVisible: ['/app/overview', '/app/properties'],
    },
    {
      name: 'addTenant',
      isVisible: false,
      routesVisible: ['/app/properties'],
    },
    {
      name: 'copy',
      isVisible: false,
      routesVisible: ['/app/properties'],
    },
  ];
  constructor(private router: Router) {}

  ngOnInit() {
    const currentRoute = this.router.url;
    this.buttons.map((btn) => {
      btn.isVisible = btn.routesVisible.includes(currentRoute);
    });
  }
}
