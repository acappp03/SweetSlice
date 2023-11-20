import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K71Page } from './k71.page';

const routes: Routes = [
  {
    path: '',
    component: K71Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K71PageRoutingModule {}
