import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student.component';
import { CreateStudentModule } from './create-student.module';



const routes: Routes = [
  {
    path: '',
    component: CreateStudentComponent,
    data: {
      title: $localize`CreateStudent`,
    },
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateStudentRoutingModule {}
