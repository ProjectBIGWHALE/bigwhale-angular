import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
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

  tamanhoDaTela: string = ''

  cardLenth:number = 0

  numberCards:number = 0


  // constructor() {
  //   // Inicialize a variável com base no tamanho inicial da tela
  //   this.atualizarTamanhoDaTela(window.innerWidth);
  // }



  


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
  
  // console.log(this.numberCards)

    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
       

      breakpoints: {

        "(min-width: 500px)": {
          slides: { perView: 1, origin: 'center' },
        },
        "(min-width: 700px)": {
          slides: { perView: 2, spacing: 1 },
        },
        "(min-width: 1200px)": {
          slides: { perView: 3, spacing: 5 },
        },
        "(min-width: 1700px)": {
          slides: { perView: 4, spacing: 10 },
        },
      },
      
    })
  }


      
      // loop: true,
      // rtl: true,
      // slides: {
      //   perView: this.numberCards,
      //   spacing: 1,
   
  

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }



 
  // // Atualize o valor da variável quando o tamanho da tela mudar
  // @HostListener('window:resize', ['$event'])
  // onResize(event: { target: { innerWidth: number; }; }) {
  //   this.atualizarTamanhoDaTela(event.target.innerWidth);

  //       // Atualize o número de cartões no slider quando o tamanho da tela mudar
  //       if (this.slider) {
  //         this.slider.destroy();
  //         this.slider = new KeenSlider(this.sliderRef.nativeElement, {
  //           loop: true,
  //           rtl: true,
  //           slides: {
  //             perView: this.numberCards,
  //             spacing: 1,
  //           },
  //         });
  //       }
  // }

  // // Lógica para definir o valor da variável com base no tamanho da tela
  // private atualizarTamanhoDaTela(larguraDaTela: number) {
  //   if (larguraDaTela < 800) {

  //     this.numberCards = 1
  //     this.tamanhoDaTela = 'Pequeno';
  //     console.log(this.tamanhoDaTela +" " + this.numberCards)
      
  //   }else if (larguraDaTela < 1000) {
  //     this.numberCards = 2
  //     this.tamanhoDaTela = 'Médio';
  //     console.log(this.tamanhoDaTela +" " +  this.numberCards)

  //   } 
  //    else if (larguraDaTela < 1300) {
  //     this.numberCards = 3
  //     this.tamanhoDaTela = 'Médio';
  //     console.log(this.tamanhoDaTela +" " +  this.numberCards)

  //   } else  {  
  //     this.numberCards = 4
  //     console.log(this.tamanhoDaTela + " " + this.numberCards)
  //     this.tamanhoDaTela = 'Grande';
  //   }
  // }



}
