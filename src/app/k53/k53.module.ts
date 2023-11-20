import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K53PageRoutingModule } from './k53-routing.module';

import { K53Page } from './k53.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K53PageRoutingModule
  ],
  declarations: [K53Page]
})
export class K53PageModule {}
