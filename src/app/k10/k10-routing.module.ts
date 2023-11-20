import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K10Page } from './k10.page';

const routes: Routes = [
  {
    path: '',
    component: K10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K10PageRoutingModule {}
