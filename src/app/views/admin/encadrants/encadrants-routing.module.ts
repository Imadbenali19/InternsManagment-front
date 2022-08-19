import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EncadrantsComponent } from './encadrants.component';

const routes: Routes = [
  {
    path: '',
    component: EncadrantsComponent,
    data: {
      title: $localize`Encadrants`,
    },
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncadrantsRoutingModule {}
