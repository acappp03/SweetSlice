import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K48Page } from './k48.page';

const routes: Routes = [
  {
    path: '',
    component: K48Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K48PageRoutingModule {}
