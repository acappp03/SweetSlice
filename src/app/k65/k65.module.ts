import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K65PageRoutingModule } from './k65-routing.module';

import { K65Page } from './k65.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K65PageRoutingModule
  ],
  declarations: [K65Page]
})
export class K65PageModule {}
