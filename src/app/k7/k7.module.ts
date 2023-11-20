import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K7PageRoutingModule } from './k7-routing.module';

import { K7Page } from './k7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K7PageRoutingModule
  ],
  declarations: [K7Page]
})
export class K7PageModule {}
