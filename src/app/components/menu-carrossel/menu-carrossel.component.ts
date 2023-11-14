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

  cardLenth:number = 0

  numberCards:number =0


  


  @ViewChild("sliderRef")
  sliderRef!: ElementRef<HTMLElement>;

  slider: any = null

 

  ngAfterViewInit() {

    // this.cardLenth = this.cards.length
    // if(this.cardLenth >= 4){
    //     this.numberCards = 3
    // }else if(this.cardLenth >= 3){
    //   this.numberCards = 2
    // }
  
  console.log(this.numberCards)

    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      rtl: true,
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
