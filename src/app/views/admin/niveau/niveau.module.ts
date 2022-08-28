import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiveauComponent } from './niveau.component';
import { NiveauListComponent } from 'src/app/components/admin/niveau-list/niveau-list.component';
import { NiveauRoutingModule } from './emplacemnt-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule, NavModule, PaginationModule, TableModule, TabsModule } from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [NiveauComponent,NiveauListComponent],
  imports: [
    CommonModule,
    NiveauRoutingModule,
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
export class NiveauModule { }
