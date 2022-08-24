import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncadrantsComponent } from './encadrants.component';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule, NavModule, PaginationModule, TableModule, TabsModule } from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { EncadrantsListComponent } from 'src/app/components/admin/encadrants-list/encadrants-list.component';
import { EncadrantsRoutingModule } from './encadrants-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    EncadrantsComponent, EncadrantsListComponent
  ],
  imports: [
    EncadrantsRoutingModule,
    CommonModule,
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
export class EncadrantsModule { }
