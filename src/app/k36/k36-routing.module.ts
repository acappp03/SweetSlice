import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K36Page } from './k36.page';

const routes: Routes = [
  {
    path: '',
    component: K36Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K36PageRoutingModule {}
