import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { K8PageRoutingModule } from './k8-routing.module';

import { K8Page } from './k8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    K8PageRoutingModule
  ],
  declarations: [K8Page]
})
export class K8PageModule {}
