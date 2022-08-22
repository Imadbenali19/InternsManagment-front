import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AnnonceComponent } from './annonce.component';

const routes: Routes = [
  {
    path: '',
    component: AnnonceComponent,
    data: {
      title: $localize`Annonce`,
    },
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnonceRoutingModule {}
