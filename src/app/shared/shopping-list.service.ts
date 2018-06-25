import { EventEmitter } from "@angular/core";
import { Ingredient } from "./ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        {
            name: 'Apple',
            amount: 5
        },
        new Ingredient('Tomatoes', 10)
    ];

    ingredientChanged = new EventEmitter<Ingredient[]>();

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {

        //viable option but it causes losts of events being emitted

        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // } 

        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}