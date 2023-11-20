import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K77PageRoutingModule } from './k77-routing.module';

import { K77Page } from './k77.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K77PageRoutingModule
  ],
  declarations: [K77Page]
})
export class K77PageModule {}
