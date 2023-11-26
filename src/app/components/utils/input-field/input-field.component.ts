import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent {
  @Input() labelTitle: string = '';
  @Input() controlName!: FormControl | any;
  @Input() errorMessage: string = '';
  @Input() placeholder: string = '';
  @Input() inputType: string = 'text';
  @Input() inputId!: string;
  @Input() clickBtn: boolean = false;
  @Input() validatorField: string = '';

  @Output() changeInput = new EventEmitter<string>();

  isValid: boolean = true;
  errorRequireMessage: string = 'O campo é obrigatório';

  isError(): boolean {
    if (this.validatorField) {
      return (
        (this.controlName?.errors?.required && this.controlName.touched) ||
        (this.clickBtn &&
          this.controlName?.errors?.required &&
          this.controlName.touched)
      );
    }
    return (
      (this.controlName?.errors?.required && this.controlName.touched) ||
      (this.clickBtn && this.controlName?.errors?.required)
    );
  }

  onChangeInput(event: any) {
    if (this.validatorField === 'number') {
      const regex = /^\d+$/gi;
      this.isValid = regex.test(event.target.value);
    }
  }
}
