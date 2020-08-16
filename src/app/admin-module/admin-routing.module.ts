import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminActiveOrderManagementComponent } from "./components/admin-active-order-management/admin-active-order-management.component";
import { AdminComponent } from "./components/admin/admin.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      { path: "active-orders", component: AdminActiveOrderManagementComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
