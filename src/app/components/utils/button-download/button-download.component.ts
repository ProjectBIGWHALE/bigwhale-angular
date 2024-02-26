import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-button-download',
  templateUrl: './button-download.component.html',
  styleUrls: ['./button-download.component.css']
})
export class ButtonDownloadComponent implements OnInit{

  @Output() submitEmitter = new EventEmitter<any>();

  @Input() isBtnValid!: boolean;

  constructor(public translate: TranslateService) {}
  ngOnInit(): void {}

  onSubmit(){
    this.submitEmitter.emit();
  }

}
