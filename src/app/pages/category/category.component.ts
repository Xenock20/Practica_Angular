import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId: string | null = null
  products: Product[] = [];
  limit = 10;
  offset = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ){}

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(paramas => {
      this.categoryId = paramas.get('id')
      if(this.categoryId){
        this.productsService.getByCategory(this.categoryId, this.limit, this.offset)
        .subscribe(data => {
          this.products = data
        })
      }
    })
  }

}
