import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalendarModule } from 'ion2-calendar';
import { BookingsComponent } from './bookings/bookings.component';
import { ComponetsModule } from '../shared/components/components.module';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';

const bookingsRoutes: Routes = [
  { path: '', component: BookingsComponent },
  { path: 'details', component: BookingDetailsComponent },
  { path: 'edit', component: EditBookingComponent },
  { path: 'list', component: BookingListComponent },
];
@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    ComponetsModule,
    CalendarModule.forRoot({
      weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    }),
    RouterModule.forChild(bookingsRoutes),
  ],
  exports: [RouterModule],
  declarations: [
    BookingsComponent,
    BookingDetailsComponent,
    EditBookingComponent,
    BookingListComponent,
  ],
  providers: [],
})
export class BookingsModule {}
