import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K45Page } from './k45.page';

const routes: Routes = [
  {
    path: '',
    component: K45Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K45PageRoutingModule {}
