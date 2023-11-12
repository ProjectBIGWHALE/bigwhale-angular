import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview2',
  templateUrl: './preview2.component.html',
  styleUrls: ['./preview2.component.css']
})
export class Preview2Component {
  @Input() eventName: string = '';
  @Input() eventWorkLoad: string = '';
  @Input() eventDate: string = '';
  @Input() eventLocale: string ='';
  @Input() speakerName: string = '';
  @Input() speakerRole: string = '';

}
