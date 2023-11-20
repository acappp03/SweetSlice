import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K61Page } from './k61.page';

const routes: Routes = [
  {
    path: '',
    component: K61Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K61PageRoutingModule {}
