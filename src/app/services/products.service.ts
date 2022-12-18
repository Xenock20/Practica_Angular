import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProductDTO, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  url = 'https://young-sands-07814.herokuapp.com/api/products'

  getAllProducts(){
    return this.http.get<Product[]>(this.url)
  }

  getProduct(id: string){
    return this.http.get<Product>(`${this.url}/${id}`)
  }

  create(data: CreateProductDTO) {
    return this.http.post<Product>(`${this.url}`, data)
  }
}
