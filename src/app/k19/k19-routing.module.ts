import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K19Page } from './k19.page';

const routes: Routes = [
  {
    path: '',
    component: K19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K19PageRoutingModule {}
