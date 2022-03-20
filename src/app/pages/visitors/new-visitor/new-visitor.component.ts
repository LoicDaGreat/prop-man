import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-visitor',
  templateUrl: './new-visitor.component.html',
  styleUrls: ['./new-visitor.component.scss'],
})
export class NewVisitorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  viewVisitors() {
    this.router.navigate(['app/visitors/list']);
  }
}
