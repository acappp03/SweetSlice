import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K49Page } from './k49.page';

const routes: Routes = [
  {
    path: '',
    component: K49Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K49PageRoutingModule {}
