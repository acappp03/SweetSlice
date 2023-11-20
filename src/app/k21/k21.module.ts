import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K21PageRoutingModule } from './k21-routing.module';

import { K21Page } from './k21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K21PageRoutingModule
  ],
  declarations: [K21Page]
})
export class K21PageModule {}
