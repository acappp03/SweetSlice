import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-library-recipe',
  templateUrl: 'library-recipe.page.html',
  styleUrls: ['library-recipe.page.scss'],
})
export class LibraryRecipePage  {
  searchTerm: string = '';
  name = [
      {
        id: 'k1',
        kek: 'Kek Lapis Diva',
      },
      {
        id: 'k2',
        kek: 'Kek Lapis Idola',
      },
      {
        id: 'k3',
        kek: 'Kek Lapis Coklat Cheese',
      },
      {
        id: 'k4',
        kek: 'Kek Lapis Masam Manis',
      },
      {
        id: 'k5',
        kek: 'Kek Harimau Malaya (Cheese, Oren, Coklat)',
      },
      {
        id: 'k6',
        kek: 'Kek Lapis Tembikai Cheese',
      },
      {
        id: 'k7',
        kek: 'Kek Lapis Siakap Keli (Lemon, Oreo, Coklat)',
      },
      {
        id: 'k8',
        kek: 'Kek Lapis Cadbury',
      },
      {
        id: 'k9',
        kek: 'Kek Lapis Mint, Coklat, dan Cheese',
      },
      {
        id: 'k10',
        kek: 'Kek Lapis Mutiara Kasih',
      },
      {
        id: 'k11',
        kek: 'Kek Lapis Oreo Cheese',
      },
      {
        id: 'k12',
        kek: 'Kek Lapis Tropika',
      },
      {
        id: 'k13',
        kek: 'Kek Lapis Tuan Anas Mikael Kek Lapis Rainbow Cheese',
      },
      {
        id: 'k14',
        kek: 'Kek Lapis Ppali-Ppali',
      },
      {
        id: 'k15',
        kek: 'Kek Lapis Coco Pie',
      }
    ];

    
    // You can continue to add more cake names to the array as needed.
    

  constructor(private router: Router) {}

  navigateToDetailPage(itemId: string) {
    // Navigate to different pages based on the item's ID
    if (itemId.startsWith('k')) {
      const itemIdNumber = parseInt(itemId.slice(1));
      if (!isNaN(itemIdNumber) && itemIdNumber >= 1 && itemIdNumber <= 15) {
        this.router.navigate([itemId]); // Change this line
   }
  }
 }

}
