import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K14PageRoutingModule } from './k14-routing.module';

import { K14Page } from './k14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K14PageRoutingModule
  ],
  declarations: [K14Page]
})
export class K14PageModule {}
