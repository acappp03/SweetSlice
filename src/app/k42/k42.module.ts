import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K42PageRoutingModule } from './k42-routing.module';

import { K42Page } from './k42.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K42PageRoutingModule
  ],
  declarations: [K42Page]
})
export class K42PageModule {}
