import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeRecipeService {

  private apiUrl = 'https://api.spoonacular.com';
  private apiKey = 'd18efa70e4944f92a6f3d2a8dbd41e27'; 
  
  private number=10;
  private page=1;
  private offset=(this.page-1)*this.number;


  constructor(private http: HttpClient) { }

  getRecipes(){
  const endpoint = '/recipes/complexSearch';
  const url = `${this.apiUrl}${endpoint}?apiKey=${this.apiKey}&number=${this.number}&offset=${this.offset}`;

  return this.http.get(url);

  }
  getRecipeInformation(ids: string) {
    console.log(ids);
    const endpoint = `/recipes/informationBulk`; // Use backticks for string interpolation
    const url = `${this.apiUrl}${endpoint}?apiKey=${this.apiKey}&ids=${ids}&includeNutrition=false`;
    return this.http.get(url);
  }
  getRecipeInformationById(id: string) {
    console.log(id);
    const endpoint = `/recipes/${id}/information`; // Use backticks for string interpolation
    const url = `${this.apiUrl}${endpoint}?apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
  searchByRecipe(query: string) {
    console.log(query);
    const endpoint = `/recipes/complexSearch`; // Use backticks for string interpolation
    const url = `${this.apiUrl}${endpoint}?apiKey=${this.apiKey}&query=${query||''}`;
    return this.http.get(url);
  }
}
