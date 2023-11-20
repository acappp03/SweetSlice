import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K75PageRoutingModule } from './k75-routing.module';

import { K75Page } from './k75.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K75PageRoutingModule
  ],
  declarations: [K75Page]
})
export class K75PageModule {}
