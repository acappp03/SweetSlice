import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K46PageRoutingModule } from './k46-routing.module';

import { K46Page } from './k46.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K46PageRoutingModule
  ],
  declarations: [K46Page]
})
export class K46PageModule {}
