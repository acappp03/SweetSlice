import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K23PageRoutingModule } from './k23-routing.module';

import { K23Page } from './k23.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K23PageRoutingModule
  ],
  declarations: [K23Page]
})
export class K23PageModule {}
