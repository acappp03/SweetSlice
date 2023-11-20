import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K34PageRoutingModule } from './k34-routing.module';

import { K34Page } from './k34.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K34PageRoutingModule
  ],
  declarations: [K34Page]
})
export class K34PageModule {}
