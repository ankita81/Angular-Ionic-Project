import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
    id: 'Sandwich',
    title: 'Sandwich',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg',
    ingredients: ['French Fries', 'Salad', 'Hamburger']
    },
    {
      id: 'Salad',
      title: 'Salad',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_960_720.jpg',
      ingredients: ['Meat', 'Momos', 'Pasta']
      }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe =>
        {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

}
