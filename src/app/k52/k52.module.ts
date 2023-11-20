import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K52PageRoutingModule } from './k52-routing.module';

import { K52Page } from './k52.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K52PageRoutingModule
  ],
  declarations: [K52Page]
})
export class K52PageModule {}
