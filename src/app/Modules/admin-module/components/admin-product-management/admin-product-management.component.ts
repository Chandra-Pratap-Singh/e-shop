import { Component, OnInit } from "@angular/core";
import { ProductsManagementService } from "../../services/products-management.service";
import { Observable } from "rxjs";
import { IProduct } from "../../modal/interfaces/product.interface";

@Component({
  selector: "app-admin-product-management",
  templateUrl: "./admin-product-management.component.html",
  styleUrls: ["./admin-product-management.component.css"],
})
export class AdminProductManagementComponent implements OnInit {
  products: Observable<IProduct[]>;

  constructor(private productsManagementService: ProductsManagementService) {}

  ngOnInit() {
    this.products = this.productsManagementService.getProducts();
  }
}
