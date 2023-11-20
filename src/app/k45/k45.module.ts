import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K45PageRoutingModule } from './k45-routing.module';

import { K45Page } from './k45.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K45PageRoutingModule
  ],
  declarations: [K45Page]
})
export class K45PageModule {}
