import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K65Page } from './k65.page';

const routes: Routes = [
  {
    path: '',
    component: K65Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K65PageRoutingModule {}
