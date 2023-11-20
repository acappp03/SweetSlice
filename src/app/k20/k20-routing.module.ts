import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K20Page } from './k20.page';

const routes: Routes = [
  {
    path: '',
    component: K20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K20PageRoutingModule {}
