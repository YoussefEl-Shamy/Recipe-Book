import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

// @Injectable({ providedIn: 'root' })
export class ShoppingListService {
  isClearable: boolean = true;
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  clearabilityChanged = new EventEmitter<boolean>();
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
    new Ingredient("Cheese", 6),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  clearIngredients() {
    this.ingredients = [];
    this.isClearable = false;
    this.ingredientsChanged.emit(this.ingredients.slice());
    this.clearabilityChanged.emit(this.isClearable);
  }

  addIngredient(ingredient: Ingredient) {
    let ingredientsNames = this.ingredients.map(ing => ing.name);

    if (ingredientsNames.indexOf(ingredient.name) == -1) {
      this.ingredients.push(ingredient);
    } else {
      this.ingredients[ingredientsNames.indexOf(ingredient.name)].amount
        = parseFloat(this.ingredients[ingredientsNames.indexOf(ingredient.name)].amount.toString())
        + parseFloat(ingredient.amount.toString());
    }
  }

  emitIngredient() {
    this.isClearable = true;
    this.clearabilityChanged.emit(this.isClearable);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  commitIngredient(ingredient: Ingredient) {
    this.addIngredient(ingredient);
    this.emitIngredient();
  }
}
