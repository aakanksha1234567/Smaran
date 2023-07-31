import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { AuthGuard } from './shared/auth-gard/auth.gard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard', canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'manage-budget', canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./views/manage-budget/manage-budget.module').then((m) => m.ManageBudgetModule)
      },
      {
        path: 'medications', canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./views/medications/medications.module').then((m) => m.MedicationsModule)
      },
      {
        path: 'reachout', canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./views/reachout/reachout.module').then((m) => m.ReachoutModule)
      },
      {
        path: 'corporate', canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./views/corporate/corporate.module').then((m) => m.CorporateModule)
      },
      {
        path: 'education', canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./views/education/education.module').then((m) => m.EducationModule)
      },
      {
        path: 'health', canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./views/health/health.module').then((m) => m.HealthModule)
      },
      {
        path: 'base', canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons', canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms', canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts', canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons', canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications', canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets', canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
