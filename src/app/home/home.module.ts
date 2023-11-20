import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage], // Remove the AppLayoutComponent
})
export class HomePageModule {}
