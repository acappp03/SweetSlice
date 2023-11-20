import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { K77Page } from './k77.page';

const routes: Routes = [
  {
    path: '',
    component: K77Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class K77PageRoutingModule {}
