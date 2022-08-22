import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceComponent } from './annonce.component';
import { AnnonceListComponent } from 'src/app/components/admin/annonce-list/annonce-list.component';
import { AnnonceRoutingModule } from './annonce-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule, NavModule, PaginationModule, TableModule, TabsModule } from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    AnnonceComponent, AnnonceListComponent
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule,
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
export class AnnonceModule { }
