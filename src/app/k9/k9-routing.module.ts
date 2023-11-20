import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K9Page } from './k9.page';

const routes: Routes = [
  {
    path: '',
    component: K9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K9PageRoutingModule {}
