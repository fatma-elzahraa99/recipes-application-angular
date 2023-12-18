import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { FavoritesComponent} from './favorites/favorites.component';
import {SearchComponent} from './search/search.component' ;
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
  { path: 'recipes', component: HomeComponent},
  { path: 'favorites', component: FavoritesComponent},
  // Add more routes as needed
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path: 'search', component: SearchComponent},
  { path: 'recipe-details', component:RecipeDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
