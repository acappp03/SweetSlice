import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K70PageRoutingModule } from './k70-routing.module';

import { K70Page } from './k70.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K70PageRoutingModule
  ],
  declarations: [K70Page]
})
export class K70PageModule {}
