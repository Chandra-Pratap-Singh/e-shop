import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { IActiveOrder } from "../modal/interfaces/active-order.interface";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { UpdateOrderStatus } from "../store/actions/admin-active-order-management.action";

@Injectable({
  providedIn: "root",
})
export class ActiveOrdersManagementService {
  constructor(
    private store: Store<{ admin: { adminActiveOrdersState: IActiveOrder[] } }>
  ) {}
  getActiveOrders(): Observable<IActiveOrder[]> {
    return this.store.pipe(map((data) => data.admin.adminActiveOrdersState));
  }
  updateActiveOrderStatus(orderId, status) {
    this.store.dispatch(new UpdateOrderStatus({ orderId, status }));
  }
}
