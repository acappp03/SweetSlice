import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K31PageRoutingModule } from './k31-routing.module';

import { K31Page } from './k31.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K31PageRoutingModule
  ],
  declarations: [K31Page]
})
export class K31PageModule {}
