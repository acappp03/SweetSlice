import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K11PageRoutingModule } from './k11-routing.module';

import { K11Page } from './k11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K11PageRoutingModule
  ],
  declarations: [K11Page]
})
export class K11PageModule {}
