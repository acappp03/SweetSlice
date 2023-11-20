import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K17Page } from './k17.page';

const routes: Routes = [
  {
    path: '',
    component: K17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K17PageRoutingModule {}
