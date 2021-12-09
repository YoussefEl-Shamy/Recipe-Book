import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

// @Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Beef Burger",
      "Defrost , Then Heat The Pan , Then Place The Burger On The Pan , 3 Minutes On One Side , 3 Minutes On The Other Side Then Flip Again For 2 Minutes All On A Medium Heat",
      "https://www.tasteofhome.com/wp-content/uploads/2020/03/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg",
      [
        new Ingredient("small onion, diced", 1),
        new Ingredient("good-quality beef mince", 500),
        new Ingredient("egg", 1),
        new Ingredient("vegetable oil", 1),
        new Ingredient("burger buns", 4),
      ]
    ),
    new Recipe(
      "Tasty Schnitzel",
      "Schnitzel is traditionally served with fresh lemon juice. Funny enough, the origin of this culinary tradition is less than appetizing. Before refrigeration was invented, lemon juice helped mask the flavor of meat gone bad. The  squeeze of lemon juice stuck, and we still serve schnitzel with lemon slices to this day.",
      "https://thumbs.dreamstime.com/b/gourmet-tasty-crumbled-schnitzel-crispy-fries-close-up-lemon-tomato-lettuce-50667370.jpg",
      [
        new Ingredient("chicken breast schnitzel", 550),
        new Ingredient("tbsp milk", 1),
        new Ingredient("egg", 1),
        new Ingredient("cup plain flour", 1/2),
        new Ingredient("tsp garlic powder", 1),
      ]
    ),
    new Recipe(
      "Pizza",
      "Dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
      "https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw=",
      [
        new Ingredient("cups warm water(600ml)", 2.5),
        new Ingredient("teaspoon sugar", 1),
        new Ingredient("teaspoons active dry yeast", 2),
        new Ingredient("cups all-purpose flour(875 g), plus more for dusting", 7),
        new Ingredient("tablespoons extra virgin olive oil, plus more for greasing", 6),
        new Ingredient("teaspoons kosher salt", 1.5),
        new Ingredient("cup semolina flour(30 g)", 1/4),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id-1];
  }
}
