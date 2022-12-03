import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}
