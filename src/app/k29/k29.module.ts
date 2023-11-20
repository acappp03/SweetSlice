import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K29PageRoutingModule } from './k29-routing.module';

import { K29Page } from './k29.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K29PageRoutingModule
  ],
  declarations: [K29Page]
})
export class K29PageModule {}
