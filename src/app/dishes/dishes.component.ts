import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { Dish } from '../dish';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  selectedDish: Dish;
  dishes: Dish[];
  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.getDishes();
  }


  setSelectedDish(dish: Dish) {
    this.selectedDish = dish;
  }

  getDishes(): void {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes);
  }

  viewDish(dish: Dish): void {
    this.setSelectedDish(dish);
  }


  deleteDish(dish: Dish): void {
    this.dishes = this.dishes.filter(d => d !== dish);
    this.dishService.deleteDish(dish).subscribe();
  }

  addDish(): void {
    let dish = new Dish();

    this.setSelectedDish(dish);
  }

  add(dish:Dish): void {
    this.dishService.addDish(dish)
      .subscribe(
        dish => this.dishes.push(dish)
    )

  }

}
