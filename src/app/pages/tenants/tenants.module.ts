import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ComponetsModule } from '../shared/components/components.module';
import { EditTenantComponent } from './edit-tenant/edit-tenant.component';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';
import { TenantsRoutingModule } from './tenants-routing.module';
import { TenantsComponent } from './tenants/tenants.component';

@NgModule({
  imports: [IonicModule, TenantsRoutingModule, ComponetsModule],
  exports: [],
  declarations: [TenantsComponent, TenantDetailsComponent, EditTenantComponent],
  providers: [],
})
export class TenantsModule {}
