import { Component, Input } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {

  @Input() labelTitle: string = '';
  @Input() controlName!: FormControl | any;
  @Input() errorMessage: string = 'O campo é obrigatório';
  @Input() placeholder: string = ''

  isError(): boolean{
    return this.controlName.hasError('required') && this.controlName.touched;
  }

}
