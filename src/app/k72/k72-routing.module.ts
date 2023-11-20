import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K72Page } from './k72.page';

const routes: Routes = [
  {
    path: '',
    component: K72Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K72PageRoutingModule {}
