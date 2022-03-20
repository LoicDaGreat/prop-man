import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ComponetsModule } from './shared/components/components.module';

@NgModule({
  imports: [IonicModule, PagesRoutingModule, ComponetsModule],
  exports: [],
  declarations: [PagesComponent],
  providers: [],
})
export class PagesModule {}
