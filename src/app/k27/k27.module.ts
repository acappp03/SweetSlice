import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K27PageRoutingModule } from './k27-routing.module';

import { K27Page } from './k27.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K27PageRoutingModule
  ],
  declarations: [K27Page]
})
export class K27PageModule {}
