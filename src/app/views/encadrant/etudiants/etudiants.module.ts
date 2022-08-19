import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardModule,
  PaginationModule,
  TableModule,
  ModalModule,
  NavModule,
  TabsModule,
  ButtonModule,
  FormModule,
  GridModule,
} from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { IconModule, IconSetService } from '@coreui/icons-angular';

import { EtudiantsComponent } from './etudiants.component';
import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantListComponent } from 'src/app/components/encadrant/etudiant-list/etudiant-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [EtudiantsComponent, EtudiantListComponent],
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
    FormModule,
    GridModule,
    TabsModule,
    NavModule,
    IconModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [IconSetService],
})
export class EtudiantsModule {}
