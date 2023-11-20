import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K27Page } from './k27.page';

const routes: Routes = [
  {
    path: '',
    component: K27Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K27PageRoutingModule {}
