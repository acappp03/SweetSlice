import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K33Page } from './k33.page';

const routes: Routes = [
  {
    path: '',
    component: K33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K33PageRoutingModule {}
