import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K10PageRoutingModule } from './k10-routing.module';

import { K10Page } from './k10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K10PageRoutingModule
  ],
  declarations: [K10Page]
})
export class K10PageModule {}
