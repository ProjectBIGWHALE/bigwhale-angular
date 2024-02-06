import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-menu-logo',
  templateUrl: './menu-logo.component.html',
  styleUrls: ['./menu-logo.component.css']
})
export class MenuLogoComponent {
  constructor(private translate: TranslateService) {

  }
}
