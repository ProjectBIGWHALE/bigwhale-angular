import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  icon: string =''
  @Input()
  title: string =''
  @Input()
  description: string=''
  @Input()
  router:string = ''


  constructor(public translate: TranslateService) {}
}
