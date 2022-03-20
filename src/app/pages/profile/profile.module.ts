import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponetsModule } from '../shared/components/components.module';
import { ProfileComponent } from './profile/profile.component';

const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [IonicModule, ComponetsModule, RouterModule.forChild(profileRoutes)],
  exports: [RouterModule],
  declarations: [ProfileComponent],
  providers: [],
})
export class ProfileModule {}
