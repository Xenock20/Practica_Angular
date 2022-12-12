import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {


  products: Product[] = [
    {
      id: '1',
      name: 'iPhone 5',
      price: 1.99,
      img: './assets/img/i5.jpg'
    },
    {
      id: '2',
      name: 'iPhone 6',
      price: 1.99,
      img: './assets/img/i6.jpg'
    },
    {
      id: '3',
      name: 'iPhone 7',
      price: 1.99,
      img: './assets/img/i7.jpg'
    },
    {
      id: '4',
      name: 'iPhone 8',
      price: 1.99,
      img: './assets/img/i8.jpg'
    },
    {
      id: '5',
      name: 'iPhone X',
      price: 1.99,
      img: './assets/img/ix.jpg'
    },
    {
      id: '6',
      name: 'iPhone 5',
      price: 1.99,
      img: './assets/img/i5.jpg'
    },
    {
      id: '7',
      name: 'iPhone 6',
      price: 1.99,
      img: './assets/img/i6.jpg'
    },
    {
      id: '8',
      name: 'iPhone 7',
      price: 1.99,
      img: './assets/img/i7.jpg'
    },
    {
      id: '9',
      name: 'iPhone 8',
      price: 1.99,
      img: './assets/img/i8.jpg'
    },
    {
      id: '10',
      name: 'iPhone X',
      price: 1.99,
      img: './assets/img/ix.jpg'
    }
  ];

}
