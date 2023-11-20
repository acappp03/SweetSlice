import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K76PageRoutingModule } from './k76-routing.module';

import { K76Page } from './k76.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K76PageRoutingModule
  ],
  declarations: [K76Page]
})
export class K76PageModule {}
