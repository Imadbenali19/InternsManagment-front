import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageComponent } from './stage.component';
import { StageListComponent } from 'src/app/components/admin/stage-list/stage-list.component';
import { StageRoutingModule } from './satge-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule, NavModule, PaginationModule, TableModule, TabsModule } from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { IconModule } from '@coreui/icons-angular';



@NgModule({
  declarations: [StageComponent,StageListComponent],
  imports: [
    CommonModule,
    StageRoutingModule,
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
export class StageModule { }
