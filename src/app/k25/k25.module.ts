import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K25PageRoutingModule } from './k25-routing.module';

import { K25Page } from './k25.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K25PageRoutingModule
  ],
  declarations: [K25Page]
})
export class K25PageModule {}
