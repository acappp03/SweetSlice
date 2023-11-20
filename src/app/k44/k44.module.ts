import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K44PageRoutingModule } from './k44-routing.module';

import { K44Page } from './k44.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K44PageRoutingModule
  ],
  declarations: [K44Page]
})
export class K44PageModule {}
