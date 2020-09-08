import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./components/products/products.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ShopComponent } from "./components/shop/shop.component";
import { CheckoutComponent } from '../user/components/checkout/checkout.component';
import { OrdersComponent } from '../user/components/orders/orders.component';

const routes: Routes = [
  {
    path: "",
    component: ShopComponent,
    children: [
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
