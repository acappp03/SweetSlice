import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K13Page } from './k13.page';

const routes: Routes = [
  {
    path: '',
    component: K13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K13PageRoutingModule {}
