import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent {

  @Input() controlName!: FormControl;
  @Input() fileLabelText: string = '';
  @Input() fileTypeAccept: string = '';
  @Input() buttonTitle : string ='';
  @Input() errorMessage: string = '';
  @Input() errorRequireMessage: string = '';
  @Input() multiple: boolean = false;

  @Input() isSelected: boolean = false;

  @Output() fileContent = new EventEmitter<any>();

  filesNames: string[] = []
  invalidFile: boolean = false


  onChangeFile(target:any){
    if(target.srcElement.files?.length > 0){
      for(let i = 0; i < target.srcElement.files?.length ; i ++)  {
        let fileName = target.srcElement.files[i].name;
        this.invalidFile = `.${fileName.split('.')[1]}` !== this.fileTypeAccept
        if(this.invalidFile) return null
        this.filesNames.push(fileName);
      }
      
      

      if(!this.multiple){
        const selectedFile: File = target.srcElement.files[0];
        return this.fileContent.emit(selectedFile);
      }
      const files: FileList = target.srcElement.files;
      return this.fileContent.emit(files);
    }
    return null;
  }
  onClick(): any{
    return document.getElementById("selectedFile")?.click();
  }
}
