import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K47Page } from './k47.page';

const routes: Routes = [
  {
    path: '',
    component: K47Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K47PageRoutingModule {}
