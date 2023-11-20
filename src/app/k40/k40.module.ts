import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K40PageRoutingModule } from './k40-routing.module';

import { K40Page } from './k40.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K40PageRoutingModule
  ],
  declarations: [K40Page]
})
export class K40PageModule {}
