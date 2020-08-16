import { Component, OnInit, Input } from '@angular/core';
import Iproduct from 'src/app/modals/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { IAddress } from 'src/app/modals/interfaces/user.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() product: Iproduct;
  cartProducts: Observable<Iproduct[]>;
  orderTotal: Observable<number>;
  addresses: Observable<IAddress[]>
  constructor(private cartService: CartService, private userService: UserService) {}
  ngOnInit() {
    this.orderTotal = this.cartService.getTotalCartValue();
    this.cartProducts = this.cartService.getCartItems();
    this.addresses = this.userService.getAddresses();
  }
  updateDeliveryAddress(event:any){
    // console.log(event.value);
    this.userService.updateActiveAddress(event.value);
  }
}
