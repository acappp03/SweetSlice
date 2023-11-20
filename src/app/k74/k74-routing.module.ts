import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K74Page } from './k74.page';

const routes: Routes = [
  {
    path: '',
    component: K74Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K74PageRoutingModule {}
