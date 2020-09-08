import { Injectable, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IproductState } from "../store/reducers/products.reducer";
import Iproduct from '../modals/interfaces/product.interface';

@Injectable({
  providedIn: "root",
})
export class ProductsService implements OnInit {
  productItems:Iproduct[] = [];
  constructor(private store: Store<{shop: { products: IproductState }}>) {}
  ngOnInit(){
  }
  getProducts(category):Iproduct[]{
    this.store.subscribe(data => this.productItems = data.shop.products.productItems)
    return this.productItems.filter(product => product.category === category);
  }
}
