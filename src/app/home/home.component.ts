import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  productData = [
    {
      name: "Cotton Formal Full Sleeves Solid Dyed Gents Shirts",
      image: "assets/img/product/product1.jpg",
      msrp: 400,
      price: 350
    },
    {
      name: "Cotton Formal Full Sleeves Solid Dyed Gents Shirts",
      image: "assets/img/product/product2.jpg",
      msrp: 400,
      price: 0
    },
    {
      name: "Cotton Formal Full Sleeves Solid Dyed Gents Shirts",
      image: "assets/img/product/product3.jpg",
      msrp: 400,
      price: 350
    },
    {
      name: "Cotton Formal Full Sleeves Solid Dyed Gents Shirts",
      image: "assets/img/product/product4.jpg",
      msrp: 400,
      price: 0
    },
    {
      name: "Cotton Formal Full Sleeves Solid Dyed Gents Shirts",
      image: "assets/img/product/product5.jpg",
      msrp: 400,
      price: 350
    },
    {
      name: "Cotton Formal Full Sleeves Solid Dyed Gents Shirts",
      image: "assets/img/product/product6.jpg",
      msrp: 400,
      price: 350
    },
    {
      name: "Cotton Formal Full Sleeves Solid Dyed Gents Shirts",
      image: "assets/img/product/product7.jpg",
      msrp: 400,
      price: 350
    }
  ]
  ngOnInit() {
  }

}
