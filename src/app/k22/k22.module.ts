import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K22PageRoutingModule } from './k22-routing.module';

import { K22Page } from './k22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K22PageRoutingModule
  ],
  declarations: [K22Page]
})
export class K22PageModule {}
