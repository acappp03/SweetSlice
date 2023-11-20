import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K12Page } from './k12.page';

const routes: Routes = [
  {
    path: '',
    component: K12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K12PageRoutingModule {}
