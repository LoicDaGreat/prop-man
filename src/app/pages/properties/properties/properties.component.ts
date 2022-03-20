import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {
  properties = [];
  constructor(private router: Router) {}

  ngOnInit() {
    for (let index = 1; index <= 20; index++) {
      this.properties.push({
        propertyName: 'Prop Name ' + index,
        address: '969 Street, Qwerty Estate',
      });
    }
  }

  viewProperty() {
    this.router.navigate(['app/properties/details']);
  }
}
