import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, PaginationModule, TableModule, ModalModule, NavModule, TabsModule } from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';

import { EtudiantsComponent } from './etudiants.component';
import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantListComponent } from 'src/app/components/encadrant/etudiant-list/etudiant-list.component'; 

@NgModule({
  declarations: [EtudiantsComponent, EtudiantListComponent],
  imports: [
    EtudiantsRoutingModule,
    CommonModule,
    PaginationModule,
    NgxPaginationModule,
    CardModule,
    TableModule,
    ModalModule,
    TabsModule,
    NavModule,
  ],
})
export class EtudiantsModule {}
