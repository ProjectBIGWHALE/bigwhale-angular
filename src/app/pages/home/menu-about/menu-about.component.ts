import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-about',
  templateUrl: './menu-about.component.html',
  styleUrls: ['./menu-about.component.css']
})
export class MenuAboutComponent {


  constructor(private translate: TranslateService) {

  }
}
