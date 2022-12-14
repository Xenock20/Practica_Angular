import { StoreService } from './../../services/store.service';
import { ProductsService } from './../../services/products.service';
import { Component, Input } from '@angular/core';
import {
  CreateProductDTO,
  Product,
  UpdateProductDTO,
} from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent{
  total = 0;
  myShoppingCart: Product[] = [];
  @Input() products: Product[] = [];
  showProductDetail = false;
  productChosen: Product = {
    id: '',
    title: '',
    images: [],
    price: 0,
    description: '',
    category: {
      id: '',
      name: '',
    },
  };

  limit = 10;
  offset = 0;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  onAddToShoppingCart(product: Product) {
    //console.log(product)
    //this.myShoppingCart.push(product);
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    this.productsService.getProduct(id).subscribe((products) => {
      //console.log(products)
      this.toggleProductDetail();
      this.productChosen = products;
    });
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'New Product',
      description: 'Bla bla bla',
      images: [''],
      price: 1110,
      categoryId: 2,
    };

    this.productsService.create(product).subscribe((res) => {
      console.log(res);
      this.products.unshift(res);
    });
  }

  updateProduct() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const change: UpdateProductDTO = {
      title: 'Update Product',
    };
    const id = this.productChosen.id;
    this.productsService.update(id, change).subscribe((res) => {
      console.log(res);
      const productIndex = this.products.findIndex(
        (item) => item.id === this.productChosen.id
      );
      this.products[productIndex] = res;
    });
  }

  deleteProduct() {
    const id = this.productChosen.id;
    this.productsService.delete(id).subscribe((res) => {
      console.log(res);
      const productIndex = this.products.findIndex(
        (item) => item.id === this.productChosen.id
      );
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    });
  }

  loadMore() {
    this.productsService
      .getProductsByPage(this.limit, this.offset)
      .subscribe((products) => {
        console.log(products);
        this.products = this.products.concat(products);
        this.offset += this.limit
      });
  }
}
