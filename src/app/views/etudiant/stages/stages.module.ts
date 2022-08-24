import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StagesComponent } from './stages.component';
import { StagesRoutingModule } from './stages-routing.module';
import {
  ButtonModule,
  CardModule,
  GridModule,
  ModalModule,
  NavModule,
  TabsModule,
} from '@coreui/angular';

@NgModule({
  declarations: [StagesComponent],
  imports: [
    CommonModule,
    StagesRoutingModule,
    GridModule,
    CardModule,
    NavModule,
    TabsModule,
    ModalModule,
    ButtonModule,
  ],
})
export class StagesModule {}
