import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    {
      name: 'A Test Recipe',
      description: 'test recipe',
      imagePath: 'https://atmedia.imgix.net/3c864c20b61c743b1748af9868a2434abed6db86?auto=format&q=45&w=600.0&h=750.0&fit=max&cs=strip'
    },
    new Recipe('A Test Recipe', 
    'This is a simple test.', 
    'http://assets.kraftfoods.com/recipe_images/opendeploy/143366_640x428.jpg')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {

  }

  onRecipeSelected(recipe: Recipe){
    this.selectedRecipe;

    this.recipeSelected.emit(recipe);
  }

}
