import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K73PageRoutingModule } from './k73-routing.module';

import { K73Page } from './k73.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K73PageRoutingModule
  ],
  declarations: [K73Page]
})
export class K73PageModule {}
