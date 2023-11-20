import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K49PageRoutingModule } from './k49-routing.module';

import { K49Page } from './k49.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K49PageRoutingModule
  ],
  declarations: [K49Page]
})
export class K49PageModule {}
