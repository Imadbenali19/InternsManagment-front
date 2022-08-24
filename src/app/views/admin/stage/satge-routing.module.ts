import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { StageComponent } from './stage.component';

const routes: Routes = [
  {
    path: '',
    component: StageComponent,
    data: {
      title: $localize`Stage`,
    },
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageRoutingModule {}
