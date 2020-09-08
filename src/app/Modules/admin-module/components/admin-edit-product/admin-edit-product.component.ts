import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-admin-edit-product",
  templateUrl: "./admin-edit-product.component.html",
  styleUrls: ["./admin-edit-product.component.css"],
})
export class AdminEditProductComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  product = {
    img: '',
    name: "Chole Bhature",
    price: 465,
    rating: 4,
    ratingProvider: 120,
    description: 'description ',
    category: '',
    presentInCart: 2,
    productId: '567',
  }

  save(fb: NgForm) {
    console.log(fb.value);
    this.http.put('https://e-shop-380c2.firebaseio.com/products.json', fb.value).subscribe(data => {
      console.log(data);
    })
  }

  updateImage(event){
    console.log('called');
    console.log(event);
  }

}
