import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K38Page } from './k38.page';

const routes: Routes = [
  {
    path: '',
    component: K38Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K38PageRoutingModule {}
