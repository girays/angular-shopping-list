import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test.', 'https://image.shutterstock.com/image-photo/blank-vintage-recipe-cooking-book-600w-504504346.jpg'),
    new Recipe('Indian food recipe', 'Indian food.', 'https://www.brit.co/media-library/this-veggie-filled-butter-chicken-curry-is-a-top-indian-food-recipe-on-our-list.jpg?id=21210913&width=600&quality=90')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
