import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnDestroy {

  img = '';

  @Input('img')
  set changeImg(img: string) {
    this.img = img;
    console.log('Cambio solo en este input sin onChange', this.img);
  }

  @Output() loaded = new EventEmitter<string>();

  imgDefault = 'https://crocsegypt.com/Content/images/NO_image.jpg';

  // counter = 0;
  // counterFn: number | undefined;

  ngOnInit() {
    console.log('ngOnInit');
    // this.counterFn = window.setInterval(()=>{
    //   this.counter++;
    //   console.log(this.counter)
    // }, 1000)
  }

  ngOnDestroy(): void {
    console.log('onDestroy')
    // window.clearInterval(this.counterFn)
  }

  imgError(){
    this.img = this.imgDefault;
  }

  imgLoad(){
    //console.log('Loaded');
    this.loaded.emit(this.img);
  }

}
