import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K67Page } from './k67.page';

const routes: Routes = [
  {
    path: '',
    component: K67Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K67PageRoutingModule {}
