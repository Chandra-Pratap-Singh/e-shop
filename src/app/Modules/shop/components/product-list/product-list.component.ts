import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IproductState } from "src/app/store/reducers/products.reducer";
import { ActivatedRoute } from "@angular/router";
import Iproduct from "src/app/modals/interfaces/product.interface";
import { AddToCart } from "src/app/store/actions/products.actions";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  activeCategory: string;
  productItems: Iproduct[];
  constructor(
    private store: Store<{shop: { products: IproductState }}>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.activeCategory = params.category;
      this.store.subscribe((data) => {
        this.productItems =
          this.activeCategory !== "all"
            ? data.shop.products.productItems.filter(
                (product) => product.category === this.activeCategory
              )
            : data.shop.products.productItems;
      });
    });
  }
}
