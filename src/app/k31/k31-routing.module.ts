import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K31Page } from './k31.page';

const routes: Routes = [
  {
    path: '',
    component: K31Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K31PageRoutingModule {}
