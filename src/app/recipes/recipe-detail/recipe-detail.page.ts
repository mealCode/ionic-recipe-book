import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RecipesService } from 'src/app/recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  public recipe: Recipe;
  public recipeId: string;

  constructor(
    private recipesService: RecipesService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes']);
        return;
      }
      this.recipeId = paramMap.get('recipeId');
      this.getRecipeById(this.recipeId);
    });
  }

  getRecipeById(id: string) {
    this.recipe = this.recipesService.getRecipe(id);
  }

  onDeleteRecipe() {
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this recipe?',
      buttons: [
        { text: 'Cancel', role: 'cancel'},
        { text: 'Delete', handler: () => {
          this.recipesService.deleteRecipe(this.recipe.id);
          this.router.navigate(['/recipes']);
        }}
      ]
    }).then(alert => {
      alert.present();
    });
  }

}
