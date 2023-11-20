import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K71PageRoutingModule } from './k71-routing.module';

import { K71Page } from './k71.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K71PageRoutingModule
  ],
  declarations: [K71Page]
})
export class K71PageModule {}
