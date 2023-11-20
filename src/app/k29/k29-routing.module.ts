import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K29Page } from './k29.page';

const routes: Routes = [
  {
    path: '',
    component: K29Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K29PageRoutingModule {}
