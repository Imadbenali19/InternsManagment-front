import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminsComponent } from './admins.component';

const routes: Routes = [
  {
    path: '',
    component: AdminsComponent,
    data: {
      title: $localize`Admins`,
    },
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsRoutingModule {}
