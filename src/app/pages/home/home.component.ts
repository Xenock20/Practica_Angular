import { Product } from 'src/app/models/product.model';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  products: Product[] = [];
  limit = 10;
  offset = 0;

  constructor(
    private productsService: ProductsService
  ){}


  ngOnInit() {
    this.productsService.getProductsByPage(10, 0).subscribe((products) => {
      console.log(products);
      this.products = products;
      this.offset += this.limit
    });
  }
}
