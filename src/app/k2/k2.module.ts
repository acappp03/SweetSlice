import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K2PageRoutingModule } from './k2-routing.module';

import { K2Page } from './k2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K2PageRoutingModule
  ],
  declarations: [K2Page]
})
export class K2PageModule {}
