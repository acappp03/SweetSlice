import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K68PageRoutingModule } from './k68-routing.module';

import { K68Page } from './k68.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K68PageRoutingModule
  ],
  declarations: [K68Page]
})
export class K68PageModule {}
