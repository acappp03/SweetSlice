import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K25Page } from './k25.page';

const routes: Routes = [
  {
    path: '',
    component: K25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K25PageRoutingModule {}
