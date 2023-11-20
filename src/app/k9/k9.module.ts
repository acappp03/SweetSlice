import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K9PageRoutingModule } from './k9-routing.module';

import { K9Page } from './k9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K9PageRoutingModule
  ],
  declarations: [K9Page]
})
export class K9PageModule {}
