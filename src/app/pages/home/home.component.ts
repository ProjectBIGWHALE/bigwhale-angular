import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../dataFake/colaboradore';
import { dataFakeCard } from 'src/app/dataFake/data-card';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';
import { CardModel } from 'src/app/models/cardModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css'],
})
export class HomeComponent implements OnInit {
  colaboradores = dataFake;
  pages = dataFakeCard;
  cards: CardModel[] = [];

  currentIndex: number[] = [0,1,2];

  devicesWidth = {
    tablet: 816,
    smartphone: 550,
  };

  qtdCards: number[] = [];
  maxCards!: number;

  selectCard: number = 0;

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}
  ngOnInit(): void {
    const savedLanguage = this.languageService.getLanguage();
    this.languageService.updateRoutesLanguage(savedLanguage);
    // Se inscreve para receber notificações sobre mudanças de idioma
    this.languageService.languageSubject.subscribe((language: string) => {
      this.languageService.updateRoutesLanguage(language);
    });
    for (let i in this.pages) {
      this.qtdCards.push(this.pages[i].cards.length);
      this.currentIndex[i] = 0;
      
    }
    // window.addEventListener('DOMContentLoaded', () => this.removerCard())
    // window.addEventListener('resize', () => this.removerCard())    
  }

  switchLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }

  // removerCard() {   
  //     if (
  //       window.outerWidth <= this.devicesWidth.tablet &&
  //       window.outerWidth > this.devicesWidth.smartphone
  //       ) {
  //         this.maxCards = 2;
  //       } else if (window.outerWidth <= this.devicesWidth.smartphone)
  //       this.maxCards = 1;
  //       else this.maxCards = this.qtdCards.reduce((acc, curr) => acc >= curr ? acc : curr);
  //       this.gridTemplateColumns();
  // }

  // gridTemplateColumns(): string{
  //   let fr = '';
  //   for(let i = 1; i <= this.maxCards ; i ++) fr+=`1fr `;     
  //   return fr
  // }

  nextCard(index: number, cardsLength: number){  
    this.currentIndex[index] = (this.currentIndex[index] + 1) % cardsLength; 
    console.log(this.currentIndex);   
       
  }

  previewCard(index :number){
    this.currentIndex[index] = (this.currentIndex[index] - 1 + index) % index;
    console.log(this.currentIndex);
    
  }

  // getIndex(index: number){
  //   this.currentIndex[] = index;
    
  // }
}

