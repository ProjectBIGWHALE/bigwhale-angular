import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { CardModel } from 'src/app/models/cardModel';

import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-menu-carrossel',
  templateUrl: './menu-carrossel.component.html',
  styleUrls: [
     "../../../../node_modules/keen-slider/keen-slider.min.css",
    './menu-carrossel.component.css']
})
export class MenuCarrosselComponent implements OnInit  {

  @Input() title: string = '';

  @Input()
  cards: CardModel[] =[]
  cardLenth:number = 0

  numberCards:number = 0

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.translateTitle();
  }

  private translateTitle(): void {
    this.translate.get(`MENU_CARROSSEL.${this.title}`).subscribe((translation: string) => {
      this.title = translation;
    });
  }
  @ViewChild("sliderRef")
  sliderRef!: ElementRef<HTMLElement>;

  slider: any = null

  ngAfterViewInit() {

    this.cardLenth = this.cards.length
    if(this.cardLenth <= 5){
      console.log('ok');
      
  }

  console.log(this.numberCards)

    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,

      rtl:true,
      breakpoints: {

        "(min-width: 500px)": {
          slides: { perView: 1, origin: 'center' },
        },
        "(min-width: 550px)": {
          slides: { perView: ajusteCard( this.cardLenth, 0 ), spacing: 1 },
        },
        "(min-width: 1100px)": {
          slides: { perView: ajusteCard( this.cardLenth, 1 ), spacing: 5 },
        },
        "(min-width: 1700px)": {
          
          slides: { perView: ajusteCard( this.cardLenth, 2 ), spacing: 10 },
          
        },
      },

    })
  }

 


  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }







}


function ajusteCard ( numeroCards:number, opcaoCase:number): number{
  switch(opcaoCase){
    case 0:
      if(numeroCards <= 2){    
        console.log("550px - 2")
        return 1;
      }else{
        return 2
      }
     
    case 1:
      if(numeroCards <= 3){console.log("1100px - 3")
        return 2;
      }else{
        return 3
      }

    case 2:
      if(numeroCards <= 3){console.log("1700px - 4")
        return 2;
      }else if(numeroCards == 4){
        return 3;
      }else{
        return 4
      }
  }

  return 0
}