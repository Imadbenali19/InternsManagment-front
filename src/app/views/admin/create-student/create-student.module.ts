import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardModule,
  FormModule,
  ModalModule,
  PaginationModule,
  TableModule,
} from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateStudentRoutingModule } from './createStudent-routing.module';
import { CreateStudentComponent } from './create-student.component';





@NgModule({
  declarations: [CreateStudentComponent],
  imports: [
    CommonModule,
    FormsModule,
    CreateStudentRoutingModule,
    ReactiveFormsModule,
    PaginationModule,
    NgxPaginationModule,
    CardModule,
    ModalModule,
    TableModule,

  ]
})
export class CreateStudentModule { }
