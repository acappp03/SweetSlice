import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K30Page } from './k30.page';

const routes: Routes = [
  {
    path: '',
    component: K30Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K30PageRoutingModule {}
