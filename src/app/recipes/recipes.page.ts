import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  slide1 = 'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg';
  slide2 = 'https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_960_720.jpg';
  recipes: Recipe[];


  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
   this.recipes = this.recipeService.getAllRecipes();
  }

}
