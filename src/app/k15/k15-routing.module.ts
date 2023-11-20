import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K15Page } from './k15.page';

const routes: Routes = [
  {
    path: '',
    component: K15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K15PageRoutingModule {}
