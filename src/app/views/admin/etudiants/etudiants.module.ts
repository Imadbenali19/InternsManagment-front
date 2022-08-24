import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantsComponent } from './etudiants.component';

import { EtudiantsRoutingModule } from '../../admin/etudiants/etudiants-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule, NavModule, PaginationModule, TableModule, TabsModule } from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { EtudianttListComponent } from 'src/app/components/admin/etudiantt-list/etudiantt-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [EtudiantsComponent, EtudianttListComponent],
  imports: [
    EtudiantsRoutingModule,
    CommonModule,
    PaginationModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    CardModule,
    TableModule,
    ModalModule,
    ButtonModule,
    FormsModule,
    FormModule,
    GridModule,
    TabsModule,
    NavModule,
    IconModule,
    NgxSkeletonLoaderModule,

  ],
providers: [IconSetService],
})
export class EtudiantsModule { }
