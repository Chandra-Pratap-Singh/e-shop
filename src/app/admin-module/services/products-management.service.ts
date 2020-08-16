import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { IProduct } from "../modal/interfaces/product.interface";
import { map } from "rxjs/operators";
import { UpdateProduct } from "../store/actions/admin-product-management.action";

@Injectable({
  providedIn: "root",
})
export class ProductsManagementService {
  constructor(private store: Store< {admin: { adminProductsState: IProduct[] }}>) {}
  getProducts() {
    return this.store.pipe(map((data) => data.admin.adminProductsState));
  }
  updateProduct(product: IProduct) {
    this.store.dispatch(new UpdateProduct(product));
  }
}
