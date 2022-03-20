import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AuthRoutingModule],
  exports: [],
  declarations: [LoginComponent, ForgotPasswordComponent],
  providers: [],
})
export class AuthModule {}
