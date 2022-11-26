import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

import { StagesComponent } from './stages.component';
import { StagesRoutingModule } from './stages-routing.module';
import {
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ModalModule,
  NavModule,
  TabsModule,
  ToastModule,
} from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StagesComponent],
  imports: [
    CommonModule,
    StagesRoutingModule,
    NgxDocViewerModule,
    GridModule,
    CardModule,
    NavModule,
    TabsModule,
    ModalModule,
    ButtonModule,
    FormModule,
    ToastModule,
    ReactiveFormsModule,
  ],
})
export class StagesModule {}
