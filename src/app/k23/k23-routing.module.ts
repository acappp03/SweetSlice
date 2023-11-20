import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K23Page } from './k23.page';

const routes: Routes = [
  {
    path: '',
    component: K23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K23PageRoutingModule {}
