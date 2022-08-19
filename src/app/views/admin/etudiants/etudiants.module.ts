import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantsComponent } from './etudiants.component';

import { EtudiantsRoutingModule } from '../../admin/etudiants/etudiants-routing.module';
import { CardModule, ModalModule, NavModule, PaginationModule, TableModule, TabsModule } from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { EtudianttListComponent } from 'src/app/components/admin/etudiantt-list/etudiantt-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EtudiantsComponent, EtudianttListComponent],
  imports: [
    EtudiantsRoutingModule,
    CommonModule,
    PaginationModule,
    NgxPaginationModule,
    CardModule,
    FormsModule,
    TableModule,
    ModalModule,
    TabsModule,
    NavModule,
  ]
})
export class EtudiantsModule { }
