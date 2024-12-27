import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/features/auth/register/utils/validators';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private fb: FormBuilder) {}

  public initRegisterForm(): FormGroup {
    return this.fb.group({
      nome: [
        '',
        [
          Validators.required,
          CustomValidators.onlyLetters(),
          CustomValidators.minLength(3),
          CustomValidators.maxLength(50),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      senha: [
        '',
        [
          Validators.required,
          CustomValidators.minLength(8),
          CustomValidators.maxLength(9),
        ],
      ],
    });
  }

  public getErrorMessage(control: any, controlName: string): string {
    if (control.hasError('required')) return 'Este campo é obrigatório.';
    if (control.hasError('onlyLetters'))
      return 'O nome deve conter apenas letras.';
    if (control.hasError('email')) return 'Formato de email inválido.';
    if (control.hasError('minLength'))
      return `O campo ${controlName} deve ter no mínimo ${control.getError(
        'minLength'
      )?.requiredLength} caracteres.`;
    if (control.hasError('maxLength'))
      return `O campo ${controlName} deve ter no máximo ${control.getError(
        'maxLength'
      )?.requiredLength} caracteres.`;
    return '';
  }
}
