import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K1Page } from './k1.page';

const routes: Routes = [
  {
    path: '',
    component: K1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K1PageRoutingModule {}
