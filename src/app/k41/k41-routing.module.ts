import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K41Page } from './k41.page';

const routes: Routes = [
  {
    path: '',
    component: K41Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K41PageRoutingModule {}
