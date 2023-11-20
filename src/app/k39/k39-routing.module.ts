import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K39Page } from './k39.page';

const routes: Routes = [
  {
    path: '',
    component: K39Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K39PageRoutingModule {}
