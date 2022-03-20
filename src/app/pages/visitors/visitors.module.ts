import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponetsModule } from '../shared/components/components.module';
import { NewVisitorComponent } from './new-visitor/new-visitor.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';

const visitorsRoutes: Routes = [
  { path: '', component: NewVisitorComponent },
  { path: 'list', component: VisitorListComponent },
];
@NgModule({
  imports: [
    IonicModule,
    ComponetsModule,
    RouterModule.forChild(visitorsRoutes),
  ],
  exports: [RouterModule],
  declarations: [NewVisitorComponent, VisitorListComponent],
  providers: [],
})
export class VisitorsModule {}
