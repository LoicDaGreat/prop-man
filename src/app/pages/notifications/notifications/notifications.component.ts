import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  items = [];
  constructor() {}

  ngOnInit() {
    for (let index = 1; index <= 20; index++) {
      this.items.push({
        propertyName: 'Prop Name ' + index,
        address: '969 Street, Qwerty Estate',
      });
    }
  }
}
