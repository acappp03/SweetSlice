import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K64Page } from './k64.page';

const routes: Routes = [
  {
    path: '',
    component: K64Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K64PageRoutingModule {}
