import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { IproductState } from "../store/reducers/products.reducer";
import { map, filter } from "rxjs/operators";
import { Observable } from "rxjs";
import Iproduct from "../modals/interfaces/product.interface";
import { AddToCart } from '../store/actions/products.actions';
@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor(private store: Store<{ shop: { products: IproductState }}>) {}

  getTotalCartValue(): Observable<number> {
    this.store.subscribe(data => console.log('my store', data))
    return this.store.pipe(
      map((data) =>
        data.shop.products.productItems
          .filter((product) => product.presentInCart > 0)
          .reduce(
            (sum, element) => sum + +element.price * element.presentInCart,
            0
          )
      )
    );
  }

  getCartItems(): Observable<Iproduct[]> {
    return this.store.pipe(
      map((data) =>
        data.shop.products.productItems.filter(
          (product) => product.presentInCart > 0
        )
      )
    );
  }

  addProductToCart(productId, quantity) {
    this.store.dispatch(new AddToCart({ productId, quantity: +quantity }));
  }

}
