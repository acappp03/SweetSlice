import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K67PageRoutingModule } from './k67-routing.module';

import { K67Page } from './k67.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K67PageRoutingModule
  ],
  declarations: [K67Page]
})
export class K67PageModule {}
