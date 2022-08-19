import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageComponent } from './stage.component';
import { StageListComponent } from 'src/app/components/admin/stage-list/stage-list.component';
import { StageRoutingModule } from './satge-routing.module';
import { CardModule, ModalModule, NavModule, PaginationModule, TableModule, TabsModule } from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StageComponent,StageListComponent],
  imports: [
    CommonModule,
    StageRoutingModule,
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
export class StageModule { }
