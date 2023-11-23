import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-compactconverter',
  templateUrl: './compactconverter.component.html',
  styleUrls: ['./compactconverter.component.css']
})
export class CompactconverterComponent implements OnInit{
  formCompact!: FormGroup;

  name: string =''

  constructor(private fb: FormBuilder){};

  ngOnInit(): void {
      this.formCompact = this.fb.group({
        name: ['', Validators['required']],
        fileZip: ['', Validators['required']]
      })
  }

  onChangeFile(fileContent:File){
    this.formCompact.patchValue({
      fileZip: fileContent
    })    
  }
  
  onSubmit(){
    console.log(this.formCompact.value);
  }
}
