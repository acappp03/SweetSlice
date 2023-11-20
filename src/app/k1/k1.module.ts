import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K1PageRoutingModule } from './k1-routing.module';

import { K1Page } from './k1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K1PageRoutingModule
  ],
  declarations: [K1Page]
})
export class K1PageModule {}
