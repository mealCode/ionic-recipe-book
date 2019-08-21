import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../recipes.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  public recipes: Recipe[];

  constructor(private recipeService: RecipesService ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.recipes = this.recipeService.getRecipes();
  }

}
