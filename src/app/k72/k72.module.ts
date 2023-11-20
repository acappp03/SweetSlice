import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K72PageRoutingModule } from './k72-routing.module';

import { K72Page } from './k72.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K72PageRoutingModule
  ],
  declarations: [K72Page]
})
export class K72PageModule {}
