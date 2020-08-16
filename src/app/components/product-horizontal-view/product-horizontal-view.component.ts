import { Component, OnInit, Input } from "@angular/core";
import Iproduct from "src/app/modals/interfaces/product.interface";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-product-horizontal-view",
  templateUrl: "./product-horizontal-view.component.html",
  styleUrls: ["./product-horizontal-view.component.css"],
})
export class ProductHorizontalViewComponent {
  @Input() product: Iproduct;
  constructor(private cartService: CartService) {}
  add(productId, quantity) {
    this.cartService.addProductToCart(productId, quantity);
  }
}
