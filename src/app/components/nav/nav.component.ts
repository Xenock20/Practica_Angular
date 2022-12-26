import { Category } from 'src/app/models/category.model';
import { CategoriesService } from './../../services/categories.service';
import { StoreService } from './../../services/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  categories: Category[] = []

  constructor(
    private storeService :StoreService,
    private categoriesService: CategoriesService
    ){}

  activeMenu = false;
  counter = 0;

  ngOnInit() {
    this.storeService.myCart$.subscribe(data => {
      this.counter = data.length;
    })

    this.getAllCategories()
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

  getAllCategories(){
    this.categoriesService.getAll().subscribe(data => {
      this.categories = data
    })
  }
}
