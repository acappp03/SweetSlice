import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K40Page } from './k40.page';

const routes: Routes = [
  {
    path: '',
    component: K40Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K40PageRoutingModule {}
