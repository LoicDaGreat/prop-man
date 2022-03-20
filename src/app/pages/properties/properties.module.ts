import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ComponetsModule } from '../shared/components/components.module';
import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyListComponent } from './property-list/property-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    PropertiesRoutingModule,
    ComponetsModule,
  ],
  exports: [],
  declarations: [
    PropertiesComponent,
    PropertyListComponent,
    PropertyDetailsComponent,
  ],
  providers: [],
})
export class PropertiesModule {}
