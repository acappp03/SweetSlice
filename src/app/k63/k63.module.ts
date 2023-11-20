import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K63PageRoutingModule } from './k63-routing.module';

import { K63Page } from './k63.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K63PageRoutingModule
  ],
  declarations: [K63Page]
})
export class K63PageModule {}
