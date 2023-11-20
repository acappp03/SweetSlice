import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K61PageRoutingModule } from './k61-routing.module';

import { K61Page } from './k61.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K61PageRoutingModule
  ],
  declarations: [K61Page]
})
export class K61PageModule {}
