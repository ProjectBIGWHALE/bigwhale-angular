import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CardModel } from 'src/app/models/cardModel';

import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-menu-carrossel',
  templateUrl: './menu-carrossel.component.html',
  styleUrls: [
     "../../../../node_modules/keen-slider/keen-slider.min.css",
    './menu-carrossel.component.css']
})
export class MenuCarrosselComponent {

  @Input()
  title:string =''

  @Input()
  cards: CardModel[] =[] 



  @ViewChild("sliderRef")
  sliderRef!: ElementRef<HTMLElement>;

  slider: any = null

 

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      rtl: false,
      slides: {
        perView: 4,
        spacing: 1,
      },
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }



}
