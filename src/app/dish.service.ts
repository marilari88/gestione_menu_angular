import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Dish } from './dish';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(
    private http: HttpClient
  ) {


  }

  private dishesUrl = 'http://localhost/gestione_menu/public/api/dishes';



  getDishes(): Observable<Dish[]> {
    console.log(`Recupero dei piatti in corso`);
    return this.http.get<Dish[]>(this.dishesUrl);
  }

  addDish(dish: Dish): Observable<Dish> {
    return this.http.post<Dish>(this.dishesUrl, dish, httpOptions).pipe(
      tap((dish: Dish) => console.log(`Inserito piatto {{dish.name}}`)),
      catchError(this.handleError<Dish>('Inserimento Piatto'))
    )
  }

editDish(dish:Dish):Observable<Dish>{
  const id = dish.id;
  //dish['_method']='PUT';
  const url = `${this.dishesUrl}/${id}/`;
  return this.http.put<Dish>(url, dish, httpOptions).pipe(
    tap((dish: Dish) => console.log(`Modificato piatto {{dish.name}}`)),
    catchError(this.handleError<Dish>('Modificato Piatto'))
  )
}

  deleteDish(dish: Dish): Observable<Dish> {
    const id = dish.id;
    const url = `${this.dishesUrl}/${id}`;
    return this.http.delete<Dish>(url, httpOptions).pipe(
      tap(_ => console.log(`Cancellato piatto`)),
      catchError(this.handleError<Dish>('Cancellazione Piatto'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
