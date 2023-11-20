import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K62Page } from './k62.page';

const routes: Routes = [
  {
    path: '',
    component: K62Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K62PageRoutingModule {}
