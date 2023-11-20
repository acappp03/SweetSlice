import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K4PageRoutingModule } from './k4-routing.module';

import { K4Page } from './k4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K4PageRoutingModule
  ],
  declarations: [K4Page]
})
export class K4PageModule {}
