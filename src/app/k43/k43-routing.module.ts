import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K43Page } from './k43.page';

const routes: Routes = [
  {
    path: '',
    component: K43Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K43PageRoutingModule {}
