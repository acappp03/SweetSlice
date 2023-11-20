import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K56PageRoutingModule } from './k56-routing.module';

import { K56Page } from './k56.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K56PageRoutingModule
  ],
  declarations: [K56Page]
})
export class K56PageModule {}
