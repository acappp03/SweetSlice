import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K44Page } from './k44.page';

const routes: Routes = [
  {
    path: '',
    component: K44Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K44PageRoutingModule {}
