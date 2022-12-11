import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  @Input() img = '';

  @Output() loaded = new EventEmitter<string>();

  imgDefault = 'https://crocsegypt.com/Content/images/NO_image.jpg';


  imgError(){
    this.img = this.imgDefault;
  }

  imgLoad(){
    //console.log('Loaded');
    this.loaded.emit(this.img);
  }

}
