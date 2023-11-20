import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K15PageRoutingModule } from './k15-routing.module';

import { K15Page } from './k15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K15PageRoutingModule
  ],
  declarations: [K15Page]
})
export class K15PageModule {}
