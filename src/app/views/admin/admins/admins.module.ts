import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from 'src/app/components/admin/admin-list/admin-list.component';
import { AdminsRoutingModule } from './admins-routing.module';
import { CardModule, ModalModule, NavModule, PaginationModule, TableModule, TabsModule } from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminsComponent } from './admins.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminsComponent, AdminListComponent],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    PaginationModule,
    NgxPaginationModule,
    FormsModule,
    CardModule,
    TableModule,
    ModalModule,
    TabsModule,
    NavModule,
  ]
})
export class AdminsModule { }
