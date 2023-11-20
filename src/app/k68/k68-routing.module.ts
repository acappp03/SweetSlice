import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K68Page } from './k68.page';

const routes: Routes = [
  {
    path: '',
    component: K68Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K68PageRoutingModule {}
