import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K50Page } from './k50.page';

const routes: Routes = [
  {
    path: '',
    component: K50Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K50PageRoutingModule {}
