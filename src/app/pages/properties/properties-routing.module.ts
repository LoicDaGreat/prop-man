import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const propertiesRoutes: Routes = [
  {
    path: '',
    component: PropertiesComponent,
  },
  {
    path: 'details',
    component: PropertyDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(propertiesRoutes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class PropertiesRoutingModule {}
