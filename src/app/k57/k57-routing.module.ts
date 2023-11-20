import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K57Page } from './k57.page';

const routes: Routes = [
  {
    path: '',
    component: K57Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K57PageRoutingModule {}
