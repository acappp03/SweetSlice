import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K54Page } from './k54.page';

const routes: Routes = [
  {
    path: '',
    component: K54Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K54PageRoutingModule {}
