import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K76Page } from './k76.page';

const routes: Routes = [
  {
    path: '',
    component: K76Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K76PageRoutingModule {}
