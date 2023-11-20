import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K16Page } from './k16.page';

const routes: Routes = [
  {
    path: '',
    component: K16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K16PageRoutingModule {}
