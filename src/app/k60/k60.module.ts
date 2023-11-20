import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K60PageRoutingModule } from './k60-routing.module';

import { K60Page } from './k60.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K60PageRoutingModule
  ],
  declarations: [K60Page]
})
export class K60PageModule {}
