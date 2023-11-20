import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K73Page } from './k73.page';

const routes: Routes = [
  {
    path: '',
    component: K73Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K73PageRoutingModule {}
