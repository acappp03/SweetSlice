import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K24PageRoutingModule } from './k24-routing.module';

import { K24Page } from './k24.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K24PageRoutingModule
  ],
  declarations: [K24Page]
})
export class K24PageModule {}
