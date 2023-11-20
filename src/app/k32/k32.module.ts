import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K32PageRoutingModule } from './k32-routing.module';

import { K32Page } from './k32.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K32PageRoutingModule
  ],
  declarations: [K32Page]
})
export class K32PageModule {}
