import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K63Page } from './k63.page';

const routes: Routes = [
  {
    path: '',
    component: K63Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K63PageRoutingModule {}
