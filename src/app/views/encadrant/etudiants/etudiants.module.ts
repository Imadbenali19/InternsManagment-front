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
  SpinnerModule,
} from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { IconModule, IconSetService } from '@coreui/icons-angular';

import { EtudiantsComponent } from './etudiants.component';
import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantListComponent } from 'src/app/components/encadrant/etudiant-list/etudiant-list.component';
import { SkeletonListLoaderComponent } from 'src/app/components/skeleton-list-loader/skeleton-list-loader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@NgModule({
  declarations: [
    EtudiantsComponent,
    EtudiantListComponent,
    SkeletonListLoaderComponent,
  ],
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
    SpinnerModule,
    NgxDocViewerModule,
  ],
  providers: [IconSetService],
})
export class EtudiantsModule {}
