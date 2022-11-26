import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmplacemntComponent } from './emplacemnt.component';
import { EmplacementListComponent } from 'src/app/components/admin/emplacement-list/emplacement-list.component';
import { EmplacemntRoutingModule } from './emplacemnt-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule, NavModule, PaginationModule, TableModule, TabsModule } from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [EmplacemntComponent, EmplacementListComponent],
  imports: [
    CommonModule,
    EmplacemntRoutingModule,
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
export class EmplacemntModule { }
