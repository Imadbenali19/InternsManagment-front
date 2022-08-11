import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';

import { DefaultLayoutComponent } from './containers';
import { AuthGuard } from './guard/auth-guard.service';

const routes: Routes = [
  { path: 'auth', component: AuthComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'authorized', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },

  {
    path: 'encadrant',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
      role: 'ROLE_ENCADRANT',
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/encadrant/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'etudiants',
        loadChildren: () =>
          import('./views/encadrant/etudiants/etudiants.module').then(
            (m) => m.EtudiantsModule
          ),
      },
      {
        path: 'affectations',
        loadChildren: () =>
          import('./views/encadrant/affectations/affectations.module').then(
            (m) => m.AffectationsModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
