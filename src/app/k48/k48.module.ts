import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K48PageRoutingModule } from './k48-routing.module';

import { K48Page } from './k48.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K48PageRoutingModule
  ],
  declarations: [K48Page]
})
export class K48PageModule {}
