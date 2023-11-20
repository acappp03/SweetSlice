import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K43PageRoutingModule } from './k43-routing.module';

import { K43Page } from './k43.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K43PageRoutingModule
  ],
  declarations: [K43Page]
})
export class K43PageModule {}
