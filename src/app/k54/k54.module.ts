import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K54PageRoutingModule } from './k54-routing.module';

import { K54Page } from './k54.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K54PageRoutingModule
  ],
  declarations: [K54Page]
})
export class K54PageModule {}
