import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K46Page } from './k46.page';

const routes: Routes = [
  {
    path: '',
    component: K46Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K46PageRoutingModule {}
