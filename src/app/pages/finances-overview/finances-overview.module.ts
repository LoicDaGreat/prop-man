import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponetsModule } from '../shared/components/components.module';
import { FinancesOverviewComponent } from './finances-overview/finances-overview.component';

const overViewRoutes: Routes = [
  { path: '', component: FinancesOverviewComponent },
];
@NgModule({
  imports: [
    IonicModule,
    ComponetsModule,
    RouterModule.forChild(overViewRoutes),
  ],
  exports: [RouterModule],
  declarations: [FinancesOverviewComponent],
  providers: [],
})
export class FinancesOverviewModule {}
