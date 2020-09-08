import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginSingupComponent } from "./components/login-signup/login-singup.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { LoginComponent } from "./components/login/login.component";

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
    path: "admin",
    loadChildren: () =>
      import("./Modules/admin-module/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "shop",
    loadChildren: () =>
      import("./Modules/shop/shop.module").then((m) => m.ShopModule),
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "products/category1",
  },
  // {
  //   path: "**",
  //   pathMatch: "full",
  //   redirectTo: "entry/login",
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
