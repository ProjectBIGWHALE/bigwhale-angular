import { Component, Input } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {

  @Input() labelTitle: string = '';
  @Input() controlName!: FormControl | any;
  @Input() errorMessage: string = 'O campo é obrigatório';
  @Input() placeholder: string = '';
  @Input() inputType: string = 'text';
  @Input() inputId!: string;
  @Input() clickBtn: boolean = false;

  isError(): boolean{
    return  (
      (this.controlName.hasError('required') && this.controlName.touched) 
        ||
      (this.clickBtn && this.controlName.errors['required'])
    );
  }
}
