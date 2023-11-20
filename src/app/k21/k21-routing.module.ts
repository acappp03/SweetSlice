import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K21Page } from './k21.page';

const routes: Routes = [
  {
    path: '',
    component: K21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K21PageRoutingModule {}
