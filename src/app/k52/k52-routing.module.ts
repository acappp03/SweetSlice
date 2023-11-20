import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K52Page } from './k52.page';

const routes: Routes = [
  {
    path: '',
    component: K52Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K52PageRoutingModule {}
