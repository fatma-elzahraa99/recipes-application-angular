import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

  isFavoriteImages: { [id: string]: boolean } = {};
  favoriteRecipes: any[] =[];
  constructor() {}

  ngOnInit(): void {
    this.retrieveStoredData();
   
  }
 
  private retrieveStoredData(): void {
    const storedData = localStorage.getItem('mySetKey');
    if (storedData) {
      // If data exists, parse it and update the isFavoriteImages object
      this.favoriteRecipes =JSON.parse(storedData); 
      this.favoriteRecipes = this.favoriteRecipes.map(recipe =>JSON.parse(recipe) );
     
      console.log(typeof(this.favoriteRecipes[0]));
      console.log(this.favoriteRecipes);
    }
  }
}




