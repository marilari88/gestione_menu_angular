import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dish } from '../dish';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  @Input() dish: Dish;
  constructor(private dishService: DishService) { }

  @Output() aggiungiPiatto: EventEmitter<Dish> = new EventEmitter();



  ngOnInit() {
  }

  aggiungi(dish: Dish): void {
   
    this.aggiungiPiatto.emit(dish);
  }

  tipoPietanze=[
    'Antipasto',
    'Primo',
    'Secondo',
    'Contorno',
    'Dolce'
  ]


}

