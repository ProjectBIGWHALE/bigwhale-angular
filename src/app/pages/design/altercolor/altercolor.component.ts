import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
@Component({
  selector: 'app-altercolor',
  templateUrl: './altercolor.component.html',
  styleUrls: ['./altercolor.component.css']
})
export class AltercolorComponent {

  constructor(public translate: TranslateService, private languageService: LanguageService) {

    translate.setDefaultLang('pt-BR');
  }
  ngOnInit(): void {

  }

  onDragOver(event: DragEvent){
    event.preventDefault();
    event.stopPropagation();
  }
  onDrop(event:DragEvent){
    event.preventDefault();
    event.stopPropagation();

    console.log(event.dataTransfer?.files);
    
  }

  saveLanguage() {
    this.languageService.setLanguage(this.languageService.getLanguage());
  }

}
