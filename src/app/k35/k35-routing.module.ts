import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K35Page } from './k35.page';

const routes: Routes = [
  {
    path: '',
    component: K35Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K35PageRoutingModule {}
