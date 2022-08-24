import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StagesComponent } from './stages.component';

const routes: Routes = [
  {
    path: '',
    component: StagesComponent,
    data: {
      title: $localize`Stages`,
    },
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StagesRoutingModule {}
