import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K19PageRoutingModule } from './k19-routing.module';

import { K19Page } from './k19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K19PageRoutingModule
  ],
  declarations: [K19Page]
})
export class K19PageModule {}
