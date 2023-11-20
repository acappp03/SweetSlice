import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryRecipePage } from './library-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: LibraryRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRecipePageRoutingModule {}
