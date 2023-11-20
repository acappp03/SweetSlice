import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K17PageRoutingModule } from './k17-routing.module';

import { K17Page } from './k17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K17PageRoutingModule
  ],
  declarations: [K17Page]
})
export class K17PageModule {}
