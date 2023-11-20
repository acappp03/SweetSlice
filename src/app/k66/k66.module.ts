import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K66PageRoutingModule } from './k66-routing.module';

import { K66Page } from './k66.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K66PageRoutingModule
  ],
  declarations: [K66Page]
})
export class K66PageModule {}
