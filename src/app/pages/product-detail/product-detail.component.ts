import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: string | null = null
  product: Product | null = null
  img = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ){}

  ngOnInit(){
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.productId = params.get('id')
        if(this.productId){
          return this.productsService.getProduct(this.productId)
        }
        return [null]
      })
    ).subscribe(data => {
      this.product = data
    })
  }

}
