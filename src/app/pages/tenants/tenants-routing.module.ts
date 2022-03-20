import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTenantComponent } from './edit-tenant/edit-tenant.component';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';
import { TenantsComponent } from './tenants/tenants.component';

const tenantsRoutes: Routes = [
  {
    path: '',
    component: TenantsComponent,
  },
  {
    path: 'details',
    component: TenantDetailsComponent,
  },
  {
    path: 'edit',
    component: EditTenantComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(tenantsRoutes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class TenantsRoutingModule {}
