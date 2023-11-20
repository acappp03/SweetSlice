import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K24Page } from './k24.page';

const routes: Routes = [
  {
    path: '',
    component: K24Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K24PageRoutingModule {}
