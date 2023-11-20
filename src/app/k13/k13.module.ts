import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K13PageRoutingModule } from './k13-routing.module';

import { K13Page } from './k13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K13PageRoutingModule
  ],
  declarations: [K13Page]
})
export class K13PageModule {}
