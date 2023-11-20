import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K2Page } from './k2.page';

const routes: Routes = [
  {
    path: '',
    component: K2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K2PageRoutingModule {}
