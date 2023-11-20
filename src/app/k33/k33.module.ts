import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K33PageRoutingModule } from './k33-routing.module';

import { K33Page } from './k33.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K33PageRoutingModule
  ],
  declarations: [K33Page]
})
export class K33PageModule {}
