import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K56Page } from './k56.page';

const routes: Routes = [
  {
    path: '',
    component: K56Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K56PageRoutingModule {}
