import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id;
  showenRecipe: Recipe;

  constructor(private slService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.showenRecipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onOrderIngredients(ingredients: Ingredient[]) {
    for (let i = 0; i < ingredients.length; i++) {
      this.slService.addIngredient(ingredients[i]);
    }
    this.slService.emitIngredient();
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
