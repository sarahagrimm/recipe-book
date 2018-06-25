import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    private recipes: Recipe[] = [
        {
            name: 'A new recipe',
            description: 'test recipe',
            imagePath: 'https://www.ndtv.com/cooks/images/chicken-chettinad_620.jpg',
            ingredients: [
                {
                    name: 'Meat',
                    amount: 1
                },
                new Ingredient('Tomatoes', 5)
            ]
        },
        new Recipe('A Test Recipe',
            'This is a simple test.',
            'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Coconut Milk', 1)
            
        ]
        )
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes(): Recipe[] {
        return this.recipes.slice(); // returns exact copy of original array
    }
}