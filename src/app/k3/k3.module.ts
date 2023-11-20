import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K3PageRoutingModule } from './k3-routing.module';

import { K3Page } from './k3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K3PageRoutingModule
  ],
  declarations: [K3Page]
})
export class K3PageModule {}
