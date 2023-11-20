import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K28PageRoutingModule } from './k28-routing.module';

import { K28Page } from './k28.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K28PageRoutingModule
  ],
  declarations: [K28Page]
})
export class K28PageModule {}
