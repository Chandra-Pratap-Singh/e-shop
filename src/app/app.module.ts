import { BrowserModule } from '@angular/platform-browser';
import { NgModule, RootRenderer } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSingupComponent } from './components/login-signup/login-singup.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { StoreModule } from '@ngrx/store'

import { loginSignupReducer } from './store/reducers/login-signup-reducer'
import { AngularFontAwesomeModule } from 'angular-font-awesome'
import { productsReducer } from './store/reducers/products.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginSingupComponent,
    ProductsComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      loginSignup: loginSignupReducer,
      products: productsReducer
    }),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
