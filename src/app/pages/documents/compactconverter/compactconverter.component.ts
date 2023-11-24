import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-compactconverter',
  templateUrl: './compactconverter.component.html',
  styleUrls: ['./compactconverter.component.css']
})
export class CompactconverterComponent implements OnInit{
  formCompact!: FormGroup;

  clickBtn: boolean = false;

  constructor(private fb: FormBuilder){};

  ngOnInit(): void {
      this.formCompact = this.fb.group({
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
    this.clickBtn = true;

    if(this.formCompact.valid){

    }
  }
}
