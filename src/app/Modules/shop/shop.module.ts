import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProductsComponent } from "./components/products/products.component";
import { StoreModule } from "@ngrx/store";
import { MatRadioModule } from "@angular/material/radio";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { productsReducer } from "./store/reducers/products.reducer";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { RatingsComponent } from "./components/shared/ratings/ratings.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { userReducer } from "./store/reducers/user.reducer";
import { orderReducer } from "./store/reducers/orders.reducer";

import { ShopRoutingModule } from "./shop-routing.module";
import { ShopComponent } from "./components/shop/shop.component";
import { UserModule } from "../user/user.module";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [
    ShopComponent,
    ProductsComponent,
    ProductCardComponent,
    RatingsComponent,
    ProductListComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    NgbModule,
    StoreModule.forFeature("shop", {
      products: productsReducer,
      userState: userReducer,
      ordersState: orderReducer,
    }),
    AngularFontAwesomeModule,
    MatRadioModule,
    UserModule,
  ],
  exports: [ProductCardComponent, RatingsComponent],
})
export class ShopModule {}
