import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://www.w3schools.com/howto/img_avatar.png'

  showImg = true;

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

  toggleImages(){
    this.showImg = !this.showImg;
  }

  onLoaded(img: string){
    console.log(img);
  }

  /*registro = {
    name: '',
    email: '',
    password: ''
  }
  widthImg = 10;
  name: string = 'Federico';
  age: number = 18;
  img: string = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisable: boolean = true;
  persona = {
    name: 'Federico',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
  nombres: string[] = ['Federico', 'Agustin', 'Julian', 'Analia']
  newName = '';
  products: Product[] = [
    {
      name: 'iPhone 5',
      price: 1.99,
      img: './assets/img/i5.jpg'
    },
    {
      name: 'iPhone 6',
      price: 1.99,
      img: './assets/img/i6.jpg'
    },
    {
      name: 'iPhone 7',
      price: 1.99,
      img: './assets/img/i7.jpg'
    },
    {
      name: 'iPhone 8',
      price: 1.99,
      img: './assets/img/i8.jpg'
    },
    {
      name: 'iPhone X',
      price: 1.99,
      img: './assets/img/ix.jpg'
    },
    {
      name: 'iPhone 5',
      price: 1.99,
      img: './assets/img/i5.jpg'
    },
    {
      name: 'iPhone 6',
      price: 1.99,
      img: './assets/img/i6.jpg'
    },
    {
      name: 'iPhone 7',
      price: 1.99,
      img: './assets/img/i7.jpg'
    },
    {
      name: 'iPhone 8',
      price: 1.99,
      img: './assets/img/i8.jpg'
    },
    {
      name: 'iPhone X',
      price: 1.99,
      img: './assets/img/ix.jpg'
    }
  ];

  toggleButton(): void {
    this.btnDisable = !this.btnDisable;
  }

  addAge(): void {
    this.persona.age++;
  }

  onScroll(event: Event): void {
    const elemento = event.target as HTMLElement;
    console.log(elemento.scrollTop);
  }

  changeName(event: Event): void{
    const elemento = event.target as HTMLInputElement;
    this.persona.name = elemento.value;
  }

  addName(): void {
    this.nombres.push(this.newName);
    this.newName = '';
  }

  deleteName(i:number): void {
    this.nombres.splice(i, 1);
  }

  onRegister(): void {
    console.log(this.registro);
  }*/
}
