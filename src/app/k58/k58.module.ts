import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K58PageRoutingModule } from './k58-routing.module';

import { K58Page } from './k58.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K58PageRoutingModule
  ],
  declarations: [K58Page]
})
export class K58PageModule {}
