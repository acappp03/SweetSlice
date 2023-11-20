import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K50PageRoutingModule } from './k50-routing.module';

import { K50Page } from './k50.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K50PageRoutingModule
  ],
  declarations: [K50Page]
})
export class K50PageModule {}
