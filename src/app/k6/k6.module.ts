import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K6PageRoutingModule } from './k6-routing.module';

import { K6Page } from './k6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K6PageRoutingModule
  ],
  declarations: [K6Page]
})
export class K6PageModule {}
