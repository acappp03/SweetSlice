import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K51Page } from './k51.page';

const routes: Routes = [
  {
    path: '',
    component: K51Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K51PageRoutingModule {}
