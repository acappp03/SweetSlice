import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K20PageRoutingModule } from './k20-routing.module';

import { K20Page } from './k20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K20PageRoutingModule
  ],
  declarations: [K20Page]
})
export class K20PageModule {}
