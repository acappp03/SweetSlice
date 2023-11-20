import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K14Page } from './k14.page';

const routes: Routes = [
  {
    path: '',
    component: K14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K14PageRoutingModule {}
