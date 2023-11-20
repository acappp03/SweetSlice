import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K59Page } from './k59.page';

const routes: Routes = [
  {
    path: '',
    component: K59Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K59PageRoutingModule {}
