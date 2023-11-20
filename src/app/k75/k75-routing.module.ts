import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K75Page } from './k75.page';

const routes: Routes = [
  {
    path: '',
    component: K75Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K75PageRoutingModule {}
