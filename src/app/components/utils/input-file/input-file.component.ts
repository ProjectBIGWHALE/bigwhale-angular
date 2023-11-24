import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent {

  @Input() controlName!: FormControl;
  @Input() filelabelTitle: string = '';
  @Input() buttonTitle : string ='';
  @Input() errorMessage: string = 'O campo é obrigatório';

  @Input() isSelected: boolean = false;

  @Output() fileContent = new EventEmitter<any>();

  fileName: string = ''

  onChangeFile(target:any){  
    const selectedFile: File = target.srcElement.files[0];
    this.fileName = selectedFile.name;    
    return this.fileContent.emit(selectedFile);
  }

  onClick(): any{    
    return document.getElementById("selectedFile")?.click(); 
  }
}
