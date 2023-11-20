import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K26PageRoutingModule } from './k26-routing.module';

import { K26Page } from './k26.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K26PageRoutingModule
  ],
  declarations: [K26Page]
})
export class K26PageModule {}
