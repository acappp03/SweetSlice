import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K16PageRoutingModule } from './k16-routing.module';

import { K16Page } from './k16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K16PageRoutingModule
  ],
  declarations: [K16Page]
})
export class K16PageModule {}
