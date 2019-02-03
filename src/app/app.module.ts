import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import {HttpClientModule} from '@angular/common/http';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
