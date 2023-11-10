import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-download',
  templateUrl: './button-download.component.html',
  styleUrls: ['./button-download.component.css']
})
export class ButtonDownloadComponent {

  @Output() submitEmitter = new EventEmitter<any>();


  onSubmit(){
    this.submitEmitter.emit();
  }

}
