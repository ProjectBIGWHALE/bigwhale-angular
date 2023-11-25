import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompactService } from '../../../services/compact.service';
import { Compact } from 'src/app/models/Compact.interface';

@Component({
  selector: 'app-compactconverter',
  templateUrl: './compactconverter.component.html',
  styleUrls: ['./compactconverter.component.css']
})
export class CompactconverterComponent implements OnInit{
  formCompact!: FormGroup;

  clickBtn: boolean = false;

  selectClick:boolean = false;

  constructor(private fb: FormBuilder, private compactService: CompactService){};

  ngOnInit(): void {
      this.formCompact = this.fb.group({
        files: ['', Validators['required']],
        outputFormat: ['', Validators['required']]
      })
  }

  onChangeFile(fileContent: FileList | null){ 
    if(fileContent === null ) return  fileContent;
    return this.formCompact.patchValue({
      files: fileContent
    })    
  }
  
    onChangeSelect(event: any){     
      this.formCompact.patchValue({
        outputFormat: event.target.value
      })
    }

    showFiles(files: FileList){
      const names: string[] =[];
      for(let i = 0; i < files.length; i++){
        let name = files[i].name; 
        name = name.replace('.zip', `.${this.formCompact.value.outputFormat}`);
        names.push(`${name}`)
      }
      return names;
    }
  
  onSubmit(){
    this.clickBtn = true;
    if(this.formCompact.valid){
      const formValues: Compact = this.formCompact.value  
        
      this.compactService.downloadFileCompact(formValues).
        subscribe({
          next: (res: any) =>{
            const blob = new Blob([res], { type: `application/json`});            
            const urlDownload = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = urlDownload;
            link.download = `file.${formValues.outputFormat}`;
            link.click();
            document.removeChild(link);
            window.URL.revokeObjectURL(urlDownload);
          },
          error: err => console.error(err)
          
        })
    }
  }
}
