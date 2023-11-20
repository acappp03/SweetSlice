import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K42Page } from './k42.page';

const routes: Routes = [
  {
    path: '',
    component: K42Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K42PageRoutingModule {}
