import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K55Page } from './k55.page';

const routes: Routes = [
  {
    path: '',
    component: K55Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K55PageRoutingModule {}
