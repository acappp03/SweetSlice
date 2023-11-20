import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K30PageRoutingModule } from './k30-routing.module';

import { K30Page } from './k30.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K30PageRoutingModule
  ],
  declarations: [K30Page]
})
export class K30PageModule {}
