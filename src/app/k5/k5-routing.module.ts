import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K5Page } from './k5.page';

const routes: Routes = [
  {
    path: '',
    component: K5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K5PageRoutingModule {}
