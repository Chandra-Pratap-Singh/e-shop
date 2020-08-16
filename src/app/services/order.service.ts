import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IordersState } from '../store/reducers/orders.reducer';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private store:Store<{ordersState: IordersState}>) { }
  getOrders():Observable<IordersState>{
    return this.store.pipe(map(data => data.ordersState))
  }
}
