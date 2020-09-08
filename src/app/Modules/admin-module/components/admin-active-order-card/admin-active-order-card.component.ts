import { Component, OnInit, Output, Input } from "@angular/core";
import { IActiveOrder } from "../../modal/interfaces/active-order.interface";
import { ACTIVEORDERSTATUS } from "../../constants/active-order-constants";
import { ActiveOrdersManagementService } from "../../services/active-orders-management.service";

@Component({
  selector: "app-admin-active-order-card",
  templateUrl: "./admin-active-order-card.component.html",
  styleUrls: ["./admin-active-order-card.component.css"],
})
export class AdminActiveOrderCardComponent implements OnInit {
  @Input("order") order: IActiveOrder;
  isCollapsed: boolean = true;
  constructor(
    private activeOrderManagementService: ActiveOrdersManagementService
  ) {}
  toggleCollapedstate() {
    this.isCollapsed = !this.isCollapsed;
  }
  getTotalPrice(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
  }
  moveToNextStep() {
    const newStatus =
      ACTIVEORDERSTATUS[ACTIVEORDERSTATUS.indexOf(this.order.status) + 1] ||
      "completed";
    this.activeOrderManagementService.updateActiveOrderStatus(
      this.order.orderId,
      newStatus
    );
  }
  ngOnInit() {}
}
