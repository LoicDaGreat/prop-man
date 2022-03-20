import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TenantsService } from 'src/app/services/tenants.service';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.scss'],
})
export class TenantDetailsComponent implements OnInit {
  invoices: any[] = [];
  tenants = [];
  private result;
  constructor(private router: Router, private tenantsService: TenantsService) {}

  ngOnInit() {

    this.tenantsService.getTenantList().subscribe(data => {
      console.log(data); 
      // this.result = data;  
      this.tenants = data.original.data;
     /* for (const item of this.result.data.original.data) {
          console.log(item.Email);
            this.tenants.push({
        name: item.Name,
        email: item.Email,
        phone:'',
        date: '22 / 04 / 2021',
      });


      }*/
    },error => { 
      console.log(error);
    },() => {
      console.log('Complete!');
    });

  }

  editTenant() {
    this.router.navigate(['app/tenants/edit']);
  }

  segmentChanged(ev) {}
}
