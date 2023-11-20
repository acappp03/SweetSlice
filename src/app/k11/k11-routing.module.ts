import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K11Page } from './k11.page';

const routes: Routes = [
  {
    path: '',
    component: K11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K11PageRoutingModule {}
