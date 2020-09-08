import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductHorizontalViewComponent } from './components/product-horizontal-view/product-horizontal-view.component';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MatRadioModule } from '@angular/material/radio';
import { OrdersComponent } from './components/orders/orders.component';



@NgModule({
  declarations: [
    CartComponent,
    ProductHorizontalViewComponent,
    CheckoutComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    AngularFontAwesomeModule,
    RouterModule,
    MatRadioModule,
  ],
  exports: [CartComponent]
})
export class UserModule { }
