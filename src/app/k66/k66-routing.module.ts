import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K66Page } from './k66.page';

const routes: Routes = [
  {
    path: '',
    component: K66Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K66PageRoutingModule {}
