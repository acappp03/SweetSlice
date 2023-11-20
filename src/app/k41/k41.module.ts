import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K41PageRoutingModule } from './k41-routing.module';

import { K41Page } from './k41.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K41PageRoutingModule
  ],
  declarations: [K41Page]
})
export class K41PageModule {}
