import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IproductState } from "src/app/store/reducers/products.reducer";
import { ActivatedRoute } from "@angular/router";
import Iproduct from "src/app/modals/interfaces/product.interface";
import { AddToCart } from "src/app/store/actions/products.actions";
import { ProductsService } from '../../services/products.service';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  productCategories: string[];
  activeCategory: string;
  productItems: Iproduct[];
  constructor(
    private store: Store<{shop: { products: IproductState }}>,
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.activeCategory = params.category;
      this.store.subscribe((data) => {
        this.productCategories = data.shop.products.productCategories;
        this.productItems = data.shop.products.productItems.filter(
          (product) => product.category === this.activeCategory
        );
      });
    });
  }
  addToCart(productId, quantity) {
    this.store.dispatch(new AddToCart({ productId, quantity: +quantity }));
  }
}
