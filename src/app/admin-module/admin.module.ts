import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { StoreModule, ActionReducerMap } from "@ngrx/store";
import { adminActiveOrderManagementReducer } from "./store/reducers/admin-active-order-management.reducer";
import { adminProductManagementReducer } from "./store/reducers/admin-product-management.reducer";
import { AdminActiveOrderManagementComponent } from "./components/admin-active-order-management/admin-active-order-management.component";
import { AdminActiveOrderCardComponent } from "./components/admin-active-order-card/admin-active-order-card.component";
import { AdminActiveOrderCardItemComponent } from "./components/admin-active-order-card-item/admin-active-order-card-item.component";
import { AdminCompletedOrderCardComponent } from "./components/admin-completed-order-card/admin-completed-order-card.component";
import { AdminCompletedOrderListComponent } from "./components/admin-completed-order-list/admin-completed-order-list.component";
import { AdminProductManagementComponent } from "./components/admin-product-management/admin-product-management.component";
import { AdminEditProductComponent } from "./components/admin-edit-product/admin-edit-product.component";
import { AdminComponent } from "./components/admin/admin.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import {IProduct} from './modal/interfaces/product.interface';
import { IActiveOrder } from './modal/interfaces/active-order.interface';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome'

// export const reducers: ActionReducerMap<{adminActiveOrdersState:IActiveOrder[], adminProductsState:IProduct[]}> = {
//   adminActiveOrdersState: adminActiveOrderManagementReducer,
//   adminProductsState: adminProductManagementReducer,
// };

@NgModule({
  declarations: [
    AdminActiveOrderManagementComponent,
    AdminActiveOrderCardComponent,
    AdminActiveOrderCardItemComponent,
    AdminCompletedOrderCardComponent,
    AdminCompletedOrderListComponent,
    AdminProductManagementComponent,
    AdminEditProductComponent,
    AdminComponent,
  ],
  imports: [
    DragDropModule,
    NgbModule,
    StoreModule.forFeature("admin",{
      adminActiveOrdersState: adminActiveOrderManagementReducer,
      adminProductsState: adminProductManagementReducer
    } ),
    CommonModule,
    AdminRoutingModule,
    AngularFontAwesomeModule
  ],
})
export class AdminModule {}
