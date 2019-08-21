import { Injectable } from '@angular/core';

import { Recipe } from './recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    { id: '1',
    title: 'Baked chilli & jacket potatoes',
    // tslint:disable-next-line: max-line-length
    imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/10/baked-chilli-jacket-potatoes.jpg?itok=ncySCTyr',
    ingredients: ['4 large jacket potatoes', '1 tbsp sunflower oil', '2 red onions, chopped', '3 garlic cloves, crushed']},
    { id: '2',
    title: 'Burger recipes',
    imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/mexican-chicken-burger_1.jpg',
    ingredients: ['1 chicken breast', '1 tsp chipotle paste', '1 lime juiced']},
    { id: '3',
    title: 'Beef bourguignon',
    // tslint:disable-next-line: max-line-length
    imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--440549_12.jpg?itok=wl6h7GFb',
    ingredients: ['1.6kg braising steak, cut into large chunks', '3 bay leaves', '2 bottles cheap red wine']}
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(recipeId: string) {
    return {
        ...this.recipes.find(recipe => {
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
