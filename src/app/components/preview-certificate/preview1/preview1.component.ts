import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview1',
  templateUrl: './preview1.component.html',
  styleUrls: ['./preview1.component.css']
})
export class Preview1Component {

  @Input() eventName: string = '';
  @Input() eventWorkLoad: string = '';
  @Input() eventDate: string = '';
  @Input() eventLocale: string ='';
  @Input() speakerName: string = '';
  @Input() speakerRole: string = '';
}
