import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffectationsComponent } from './affectations.component';
import { AffectationsRoutingModule } from './affectations-routing.module';
import { AffectationListComponent } from 'src/app/components/encadrant/affectation-list/affectation-list.component';
import {
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ModalModule,
  PaginationModule,
  TableModule,
} from '@coreui/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
  declarations: [AffectationsComponent, AffectationListComponent],
  imports: [
    AffectationsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    PaginationModule,
    NgxPaginationModule,
    CardModule,
    ModalModule,
    TableModule,
    IconModule,
    ButtonModule,
    FormModule,
    GridModule,
  ],
  providers: [IconSetService],
})
export class AffectationsModule {}
