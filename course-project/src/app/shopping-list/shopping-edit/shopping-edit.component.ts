import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;
  isClearable: boolean;
  nameEmpty: boolean = false;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.isClearable = this.slService.isClearable;
    this.slService.clearabilityChanged.subscribe(
      (isClearable) => this.isClearable = isClearable
    );
    console.log(this.isClearable);
  }

  onAddIngredient() {
    if (this.nameInput.nativeElement.value != "") {
      this.nameEmpty = false;
      this.nameInput.nativeElement.classList.remove("invalid");
      let amount = this.amountInput.nativeElement.value != "" ? this.amountInput.nativeElement.value : 1;
      this.slService.commitIngredient({
        name: this.nameInput.nativeElement.value,
        amount: amount,
      });
    } else {
      this.nameEmpty = true;
      this.nameInput.nativeElement.classList.add("invalid");
    }
    console.log(this.isClearable);
  }

  onClearIngredients() {
    this.slService.clearIngredients();
    console.log(this.isClearable);
  }
}
