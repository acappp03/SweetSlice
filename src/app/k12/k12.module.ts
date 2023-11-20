import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K12PageRoutingModule } from './k12-routing.module';

import { K12Page } from './k12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K12PageRoutingModule
  ],
  declarations: [K12Page]
})
export class K12PageModule {}
