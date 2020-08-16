import { BrowserModule } from '@angular/platform-browser';
import { NgModule, RootRenderer } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSingupComponent } from './components/login-signup/login-singup.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { StoreModule } from '@ngrx/store'
import {MatRadioModule} from '@angular/material/radio';
import { loginSignupReducer } from './store/reducers/login-signup-reducer'
import { AngularFontAwesomeModule } from 'angular-font-awesome'
import { productsReducer } from './store/reducers/products.reducer';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RatingsComponent } from './components/shared/ratings/ratings.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductHorizontalViewComponent } from './components/product-horizontal-view/product-horizontal-view.component';
import { userReducer } from './store/reducers/user.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersComponent } from './components/orders/orders.component';
import { orderReducer } from './store/reducers/orders.reducer';
import { AdminModule } from './admin-module/admin.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginSingupComponent,
    ProductsComponent,
    LoginComponent,
    SignUpComponent,
    ProductCardComponent,
    RatingsComponent,
    ProductListComponent,
    HeaderComponent,
    CheckoutComponent,
    CartComponent,
    ProductHorizontalViewComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    StoreModule.forRoot({
      loginSignup: loginSignupReducer,
      products: productsReducer,
      userState: userReducer,
      ordersState: orderReducer
    }),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatRadioModule,
    // AdminModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
