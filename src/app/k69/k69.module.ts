import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K69PageRoutingModule } from './k69-routing.module';

import { K69Page } from './k69.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K69PageRoutingModule
  ],
  declarations: [K69Page]
})
export class K69PageModule {}
