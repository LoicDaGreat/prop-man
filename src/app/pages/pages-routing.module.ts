import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        loadChildren: () =>
          import('./finances-overview/finances-overview.module').then(
            (m) => m.FinancesOverviewModule
          ),
      },
      {
        path: 'invoices',
        loadChildren: () =>
          import('./invoices/invoices.module').then((m) => m.InvoicesModule),
      },
      {
        path: 'tickets',
        loadChildren: () =>
          import('./tickets/tickets.module').then((m) => m.TicketsModule),
      },
      {
        path: 'properties',
        loadChildren: () =>
          import('./properties/properties.module').then(
            (m) => m.PropertiesModule
          ),
      },
      {
        path: 'tenants',
        loadChildren: () =>
          import('./tenants/tenants.module').then((m) => m.TenantsModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./notifications/notifications.module').then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: 'visitors',
        loadChildren: () =>
          import('./visitors/visitors.module').then((m) => m.VisitorsModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'bookings',
        loadChildren: () =>
          import('./bookings/bookings.module').then((m) => m.BookingsModule),
      },
      {
        path: 'payments',
        loadChildren: () =>
          import('./payments/payments.module').then((m) => m.PaymentsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class PagesRoutingModule {}
