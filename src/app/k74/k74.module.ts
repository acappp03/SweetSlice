import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K74PageRoutingModule } from './k74-routing.module';

import { K74Page } from './k74.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K74PageRoutingModule
  ],
  declarations: [K74Page]
})
export class K74PageModule {}
