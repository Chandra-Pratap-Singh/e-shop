import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginSingupComponent } from "./components/login-signup/login-singup.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { OrdersComponent } from "./components/orders/orders.component";

const routes: Routes = [
  {
    path: "entry",
    component: LoginSingupComponent,
    children: [
      {
        path: "sign-up",
        component: SignUpComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
    ],
  },
  {
    path: "products",
    component: ProductsComponent,
    children: [
      {
        path: ":category",
        component: ProductListComponent,
      },
    ],
  },
  {
    path: "checkout",
    component: CheckoutComponent,
  },
  {
    path: "orders",
    component: OrdersComponent,
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin-module/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "products/category1",
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "entry/login",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
