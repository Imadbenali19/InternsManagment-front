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
    path: 'admin',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
      role: 'ROLE_ADMIN',
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/admin/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'encadrants',
        loadChildren: () =>
          import('./views/admin/encadrants/encadrants.module').then(
            (m) => m.EncadrantsModule
          ),
      },
      {
        path: 'etudiants',
        loadChildren: () =>
          import('./views/admin/etudiants/etudiants.module').then(
            (m) => m.EtudiantsModule
          ),
      },
      {
        path: 'admins',
        loadChildren: () =>
          import('./views/admin/admins/admins.module').then(
            (m) => m.AdminsModule
          ),
      },
      {
        path: 'annonces',
        loadChildren: () =>
          import('./views/admin/annonce/annonce.module').then(
            (m) => m.AnnonceModule
          ),
      },
      {
        path: 'stages',
        loadChildren: () =>
          import('./views/admin/stage/stage.module').then(
            (m) => m.StageModule
          ),
      },
      {
        path: 'createStudent',
        loadChildren: () =>
          import('./views/admin/create-student/create-student.module').then(
            (m) => m.CreateStudentModule
          ),
      },
    ]
  },

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
  {
    path: 'etudiant',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
      role: 'ROLE_ETUDIANT',
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'stages',
        loadChildren: () =>
          import('./views/etudiant/stages/stages.module').then(
            (m) => m.StagesModule
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
