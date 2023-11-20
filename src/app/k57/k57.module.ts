import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K57PageRoutingModule } from './k57-routing.module';

import { K57Page } from './k57.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K57PageRoutingModule
  ],
  declarations: [K57Page]
})
export class K57PageModule {}
