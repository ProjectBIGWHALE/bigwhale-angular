import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.css']
})
export class InputRadioComponent {

  @Input() labelTitle: string = '';
  @Input() controlName!: FormControl | any;
  @Input() valueInput: string = ''; 
  @Input() isChecked!: boolean;   
}
