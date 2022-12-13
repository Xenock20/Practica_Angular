import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
    id: '',
    name: '' ,
    img: 'https://crocsegypt.com/Content/images/NO_image.jpg',
    price: 0
  }

  @Output() addedProduct = new EventEmitter<Product>();

  onAddToCart(){
    this.addedProduct.emit(this.product);
  }

}
