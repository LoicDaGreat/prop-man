import { Component, OnInit } from '@angular/core';
import { TenantsService } from 'src/app/services/tenants.service';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss'],
})
export class TenantsComponent implements OnInit {
  tenants = [];
  private result;
  constructor(private tenantsService: TenantsService) {}

  ngOnInit() {
  
    this.tenantsService.getTenantList().subscribe(data => {
      console.log(data); 
      this.result = data;  
      for (const item of this.result.data.original.data) {
          console.log(item.Email);
            this.tenants.push({
        name: item.Name,
        email: item.Email,
        phone:'067 762 4520',
        date: '22 / 04 / 2021',
      });


      }
    },error => { 
      console.log(error);
    },() => {
      console.log('Complete!');
    });

     

  }
}
