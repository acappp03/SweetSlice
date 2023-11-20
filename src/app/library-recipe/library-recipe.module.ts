import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { LibraryRecipePageRoutingModule } from './library-recipe-routing.module';

import { LibraryRecipePage } from './library-recipe.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryRecipePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [LibraryRecipePage]
})
export class LibraryRecipePageModule {}
