import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K55PageRoutingModule } from './k55-routing.module';

import { K55Page } from './k55.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K55PageRoutingModule
  ],
  declarations: [K55Page]
})
export class K55PageModule {}
