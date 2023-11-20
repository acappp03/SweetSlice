import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K18Page } from './k18.page';

const routes: Routes = [
  {
    path: '',
    component: K18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K18PageRoutingModule {}
