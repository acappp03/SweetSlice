import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K38PageRoutingModule } from './k38-routing.module';

import { K38Page } from './k38.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K38PageRoutingModule
  ],
  declarations: [K38Page]
})
export class K38PageModule {}
