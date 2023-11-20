import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K60Page } from './k60.page';

const routes: Routes = [
  {
    path: '',
    component: K60Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K60PageRoutingModule {}
