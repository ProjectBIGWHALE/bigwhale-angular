import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './card.responsive.component.css']
})
export class CardComponent implements OnInit{

  @Input()
  icon: string =''
  @Input()
  title: string =''
  @Input()
  description: string=''
  @Input()
  router:string = '';




  constructor(public translate: TranslateService) {}

  ngOnInit(): void {  
  }
  
}
