import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K35PageRoutingModule } from './k35-routing.module';

import { K35Page } from './k35.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K35PageRoutingModule
  ],
  declarations: [K35Page]
})
export class K35PageModule {}
