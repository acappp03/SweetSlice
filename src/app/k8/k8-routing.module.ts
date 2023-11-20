import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K8Page } from './k8.page';

const routes: Routes = [
  {
    path: '',
    component: K8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K8PageRoutingModule {}
