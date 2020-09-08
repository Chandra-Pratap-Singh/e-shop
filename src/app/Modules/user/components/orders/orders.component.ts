import { Component, OnInit } from '@angular/core';
import { IordersState } from 'src/app/store/reducers/orders.reducer';
import { Observable } from 'rxjs';
import { Iorder } from 'src/app/modals/interfaces/order.interface';
import { element } from 'protractor';
import { OrderService } from 'src/app/Modules/shop/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:Observable<IordersState>;
  constructor(private ordersService: OrderService) { }

  ngOnInit() {
    this.orders = this.ordersService.getOrders();
  }

  getTotalAmount(orderItems:Iorder[]): number{
    return orderItems.reduce((sum, element) => (sum + element.price*element.quantity),0);
  }

}
