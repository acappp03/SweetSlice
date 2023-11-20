import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K64PageRoutingModule } from './k64-routing.module';

import { K64Page } from './k64.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K64PageRoutingModule
  ],
  declarations: [K64Page]
})
export class K64PageModule {}
