import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isCondensed: boolean = false;
  
  @ViewChild('slides', { static: true }) slides: IonSlides | undefined;

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };

  constructor(private router: Router) {}

  goToSearchPage() {
    this.router.navigate(['/search']);
  }
}
