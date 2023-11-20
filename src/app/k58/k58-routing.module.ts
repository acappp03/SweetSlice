import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K58Page } from './k58.page';

const routes: Routes = [
  {
    path: '',
    component: K58Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K58PageRoutingModule {}
