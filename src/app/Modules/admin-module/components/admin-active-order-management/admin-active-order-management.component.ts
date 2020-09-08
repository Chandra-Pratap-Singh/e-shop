import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { ActiveOrdersManagementService } from "../../services/active-orders-management.service";
import { Observable } from "rxjs";
import { IActiveOrder } from "../../modal/interfaces/active-order.interface";

import { ACTIVEORDERSTATUS } from "../../constants/active-order-constants";

@Component({
  selector: "app-admin-active-order-management",
  templateUrl: "./admin-active-order-management.component.html",
  styleUrls: ["./admin-active-order-management.component.css"],
})
export class AdminActiveOrderManagementComponent implements OnInit {
  activeOrderStatus = ACTIVEORDERSTATUS;
  orders: any = {};
  constructor(
    private activeOrderManagementService: ActiveOrdersManagementService
  ) {}

  ngOnInit() {
    this.activeOrderManagementService
      .getActiveOrders()
      .subscribe((data) => this.segregateOrdersStatusWise(data));
  }

  returnZero(){
    return 0;
  }

  segregateOrdersStatusWise(data) {
    ACTIVEORDERSTATUS.forEach((status) => {
      this.orders[status] = data.filter((order) => order.status === status);
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.container.data !== event.previousContainer.data) {
      this.activeOrderManagementService.updateActiveOrderStatus(
        event.item.data.orderId,
        event.container.data
      );
    }
  }
}
