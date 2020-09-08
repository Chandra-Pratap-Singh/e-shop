import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Iproduct from 'src/app/modals/interfaces/product.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product:Iproduct;
  @Output() addToCart = new EventEmitter()
  constructor(private cartService: CartService) { }
  add(quantity:number){
    this.cartService.addProductToCart(this.product.productId, quantity)
  }
}
