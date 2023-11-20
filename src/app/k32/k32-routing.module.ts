import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K32Page } from './k32.page';

const routes: Routes = [
  {
    path: '',
    component: K32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K32PageRoutingModule {}
