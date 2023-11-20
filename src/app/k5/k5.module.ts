import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K5PageRoutingModule } from './k5-routing.module';

import { K5Page } from './k5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K5PageRoutingModule
  ],
  declarations: [K5Page]
})
export class K5PageModule {}
