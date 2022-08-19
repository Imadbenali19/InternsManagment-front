import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceComponent } from './annonce.component';
import { AnnonceListComponent } from 'src/app/components/admin/annonce-list/annonce-list.component';
import { AnnonceRoutingModule } from './annonce-routing.module';
import { CardModule, ModalModule, NavModule, PaginationModule, TableModule, TabsModule } from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnnonceComponent, AnnonceListComponent
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule,
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
export class AnnonceModule { }
