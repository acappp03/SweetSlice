import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K7Page } from './k7.page';

const routes: Routes = [
  {
    path: '',
    component: K7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K7PageRoutingModule {}
