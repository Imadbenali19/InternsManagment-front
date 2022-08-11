import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AffectationsComponent } from './affectations.component';

const routes: Routes = [
  {
    path: '',
    component: AffectationsComponent,
    data: {
      title: $localize`Affectations`,
    },
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AffectationsRoutingModule {}
