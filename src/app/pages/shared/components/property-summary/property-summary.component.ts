import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-summary',
  templateUrl: './property-summary.component.html',
  styleUrls: ['./property-summary.component.scss'],
})
export class PropertySummaryComponent implements OnInit {
  @Input() property;
  constructor(private router: Router) {}

  ngOnInit() {}

  viewProperty() {
    this.router.navigate(['app/properties/details']);
  }
}
