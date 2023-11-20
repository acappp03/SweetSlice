import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K51PageRoutingModule } from './k51-routing.module';

import { K51Page } from './k51.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K51PageRoutingModule
  ],
  declarations: [K51Page]
})
export class K51PageModule {}
