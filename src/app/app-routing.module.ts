import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginSingupComponent } from "./components/login-signup/login-singup.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';

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
    path: 'products/:category',
    component: ProductsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'entry/login'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'entry/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
