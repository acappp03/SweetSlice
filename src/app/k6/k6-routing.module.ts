import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K6Page } from './k6.page';

const routes: Routes = [
  {
    path: '',
    component: K6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K6PageRoutingModule {}
