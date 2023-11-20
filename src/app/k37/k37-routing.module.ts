import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K37Page } from './k37.page';

const routes: Routes = [
  {
    path: '',
    component: K37Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K37PageRoutingModule {}
