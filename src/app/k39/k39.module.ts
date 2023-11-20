import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K39PageRoutingModule } from './k39-routing.module';

import { K39Page } from './k39.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K39PageRoutingModule
  ],
  declarations: [K39Page]
})
export class K39PageModule {}
