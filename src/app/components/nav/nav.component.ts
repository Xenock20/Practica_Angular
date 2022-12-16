import { StoreService } from './../../services/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private storeService :StoreService){}

  activeMenu = false;
  counter = 0;

  ngOnInit() {
    this.storeService.myCart$.subscribe(data => {
      this.counter = data.length;
    })
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }
}
