import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K62PageRoutingModule } from './k62-routing.module';

import { K62Page } from './k62.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K62PageRoutingModule
  ],
  declarations: [K62Page]
})
export class K62PageModule {}
