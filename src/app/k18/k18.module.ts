import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K18PageRoutingModule } from './k18-routing.module';

import { K18Page } from './k18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K18PageRoutingModule
  ],
  declarations: [K18Page]
})
export class K18PageModule {}
