import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-download',
  templateUrl: './button-download.component.html',
  styleUrls: ['./button-download.component.css']
})
export class ButtonDownloadComponent implements OnInit{

  @Output() submitEmitter = new EventEmitter<any>();

  @Input() isBtnValid!: boolean;

  ngOnInit(): void {
      
  }

  onSubmit(){
    this.submitEmitter.emit();
  }

}
