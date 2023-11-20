import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K28Page } from './k28.page';

const routes: Routes = [
  {
    path: '',
    component: K28Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K28PageRoutingModule {}
