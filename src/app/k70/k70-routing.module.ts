import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K70Page } from './k70.page';

const routes: Routes = [
  {
    path: '',
    component: K70Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K70PageRoutingModule {}
