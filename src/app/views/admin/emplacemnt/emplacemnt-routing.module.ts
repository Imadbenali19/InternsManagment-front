import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EmplacemntComponent } from './emplacemnt.component';

const routes: Routes = [
  {
    path: '',
    component: EmplacemntComponent,
    data: {
      title: $localize`Emplacemnt`,
    },
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmplacemntRoutingModule {}
