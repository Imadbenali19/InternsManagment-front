import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from 'src/app/components/admin/admin-list/admin-list.component';
import { AdminsRoutingModule } from './admins-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule, NavModule, PaginationModule, TableModule, TabsModule } from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminsComponent } from './admins.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [AdminsComponent, AdminListComponent],
  imports: [
    CommonModule,
    AdminsRoutingModule,
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
  ]
})
export class AdminsModule { }
