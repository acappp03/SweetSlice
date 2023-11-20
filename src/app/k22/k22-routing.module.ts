import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K22Page } from './k22.page';

const routes: Routes = [
  {
    path: '',
    component: K22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K22PageRoutingModule {}
