import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K69Page } from './k69.page';

const routes: Routes = [
  {
    path: '',
    component: K69Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K69PageRoutingModule {}
