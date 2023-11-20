import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K3Page } from './k3.page';

const routes: Routes = [
  {
    path: '',
    component: K3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K3PageRoutingModule {}
