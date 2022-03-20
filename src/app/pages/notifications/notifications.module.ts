import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponetsModule } from '../shared/components/components.module';
import { NotificationsComponent } from './notifications/notifications.component';

const notificationsRoutes: Routes = [
  { path: '', component: NotificationsComponent },
];
@NgModule({
  imports: [
    IonicModule,
    ComponetsModule,
    RouterModule.forChild(notificationsRoutes),
  ],
  exports: [],
  declarations: [NotificationsComponent],
  providers: [],
})
export class NotificationsModule {}
