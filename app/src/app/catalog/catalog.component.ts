import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  public woods = [
    {
      imgSrc: '/assets/images/cat_rmblanks_category.jpg',
      h3: 'READY MADE BLANKS',
      types: ['Carving blanks', 'Model Making', 'Pen Blanks', 'Other Blanks...']
    },
    {
      imgSrc: '/assets/images/cat_nativehardwoods_category.jpg',
      h3: 'NATIVE HARDWOODS',
      types: ['Ash', 'Beech', 'Cherry', 'Other Hardwoods...']
    },
    {
      imgSrc: '/assets/images/cat_rmblanks_category.jpg',
      h3: 'EXOTIC HARDwoods',
      types: [
        'African Blackwood',
        'Black Palmira',
        'Indian Rosewood',
        'Other Hardwoods...'
      ]
    }
  ];
}
