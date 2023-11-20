import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K37PageRoutingModule } from './k37-routing.module';

import { K37Page } from './k37.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K37PageRoutingModule
  ],
  declarations: [K37Page]
})
export class K37PageModule {}
