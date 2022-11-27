import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NiveauComponent } from './niveau.component';




const routes: Routes = [
  {
    path: '',
    component: NiveauComponent,
    data: {
      title: $localize`Niveau`,
    },
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NiveauRoutingModule {}
