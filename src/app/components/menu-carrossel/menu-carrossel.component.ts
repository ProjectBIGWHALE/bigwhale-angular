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


  constructor() {
    // Inicialize a variável com base no tamanho inicial da tela
    this.atualizarTamanhoDaTela(window.innerWidth);
  }



  


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
      rtl: true,
      slides: {
        perView: this.numberCards,
        spacing: 1,
      },
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }



 
  // Atualize o valor da variável quando o tamanho da tela mudar
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.atualizarTamanhoDaTela(event.target.innerWidth);
  }

  // Lógica para definir o valor da variável com base no tamanho da tela
  private atualizarTamanhoDaTela(larguraDaTela: number) {
    if (larguraDaTela < 600) {

      this.numberCards = 1
      this.tamanhoDaTela = 'Pequeno';
      console.log(this.tamanhoDaTela)
      
    } else if (larguraDaTela < 1200) {
      this.numberCards = 3

      console.log(this.tamanhoDaTela)
      this.tamanhoDaTela = 'Médio';

    } else  {  
      this.numberCards = 4
      console.log(this.tamanhoDaTela)
      this.tamanhoDaTela = 'Grande';
    }
  }



}
