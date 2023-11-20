import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K47PageRoutingModule } from './k47-routing.module';

import { K47Page } from './k47.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K47PageRoutingModule
  ],
  declarations: [K47Page]
})
export class K47PageModule {}
