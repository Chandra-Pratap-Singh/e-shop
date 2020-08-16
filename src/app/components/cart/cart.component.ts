import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/services/cart.service";
import { Observable } from "rxjs";
import Iproduct from 'src/app/modals/interfaces/product.interface';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  orderTotal: Observable<number>;
  cartProducts:Observable<Iproduct[]>
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.orderTotal = this.cartService.getTotalCartValue();
    this.cartProducts = this.cartService.getCartItems();
  }
  add(productId, quantity){
    this.cartService.addProductToCart(productId,quantity)
  }
}
