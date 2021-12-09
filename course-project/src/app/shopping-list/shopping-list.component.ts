import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  isClearable: boolean;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => this.ingredients = ingredients
    );

    this.isClearable = this.slService.isClearable;
    this.slService.clearabilityChanged.subscribe(
      (isClearable) => this.isClearable = isClearable
    );
  }
}
