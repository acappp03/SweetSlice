import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K4Page } from './k4.page';

const routes: Routes = [
  {
    path: '',
    component: K4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K4PageRoutingModule {}
