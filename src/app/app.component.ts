import { FilesService } from './services/files.service';
import { UsersService } from './services/users.service';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://www.w3schools.com/howto/img_avatar.png'

  showImg = true;

  token = ''


  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private filesService: FilesService
  ){}


  toggleImages(){
    this.showImg = !this.showImg;
  }

  onLoaded(img: string){
    console.log(img);
  }

  createUser(){
    this.usersService.createUser({
      email: 'federico@example.com',
      password: '123',
      name: 'Federico'
    })
    .subscribe(res => {
      console.log(res)
    })
  }

  login(){
    this.authService.login('federico@example.com', '123')
    .subscribe(res=>{
      console.log(res.access_token)
      this.token = res.access_token
    })
  }

  getProfile(){
    this.authService.profile()
    .subscribe(res=>{
      console.log(res)
    })
  }

  downloadPDF(){
    this.filesService.getFile('myPdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf').subscribe()
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
