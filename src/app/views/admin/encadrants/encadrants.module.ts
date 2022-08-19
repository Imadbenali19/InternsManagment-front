import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncadrantsComponent } from './encadrants.component';
import { CardModule, ModalModule, NavModule, PaginationModule, TableModule, TabsModule } from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { EncadrantsListComponent } from 'src/app/components/admin/encadrants-list/encadrants-list.component';
import { EncadrantsRoutingModule } from './encadrants-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EncadrantsComponent, EncadrantsListComponent
  ],
  imports: [
    EncadrantsRoutingModule,
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
export class EncadrantsModule { }
