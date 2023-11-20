import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K36PageRoutingModule } from './k36-routing.module';

import { K36Page } from './k36.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K36PageRoutingModule
  ],
  declarations: [K36Page]
})
export class K36PageModule {}
