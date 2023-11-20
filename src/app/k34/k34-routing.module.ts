import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K34Page } from './k34.page';

const routes: Routes = [
  {
    path: '',
    component: K34Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K34PageRoutingModule {}
