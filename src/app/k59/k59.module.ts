import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K59PageRoutingModule } from './k59-routing.module';

import { K59Page } from './k59.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K59PageRoutingModule
  ],
  declarations: [K59Page]
})
export class K59PageModule {}
