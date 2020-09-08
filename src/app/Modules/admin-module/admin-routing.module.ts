import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminActiveOrderManagementComponent } from "./components/admin-active-order-management/admin-active-order-management.component";
import { AdminComponent } from "./components/admin/admin.component";
import { AdminProductManagementComponent } from './components/admin-product-management/admin-product-management.component';
import { AdminEditProductComponent } from './components/admin-edit-product/admin-edit-product.component';
import { AdminCompletedOrderListComponent } from './components/admin-completed-order-list/admin-completed-order-list.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      { path: "active-orders", component: AdminActiveOrderManagementComponent },
      { path: "completed-orders", component: AdminCompletedOrderListComponent },
      { path: "products", component: AdminProductManagementComponent },
      { path: "edit-product/:productId", component: AdminEditProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
