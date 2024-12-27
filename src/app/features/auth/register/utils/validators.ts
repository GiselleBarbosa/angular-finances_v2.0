import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  public static minLength(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && control.value.length < min) {
        return {
          minLength: {
            requiredLength: min,
            actualLength: control.value.length,
          },
        };
      }
      return null;
    };
  }

  public static maxLength(max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && control.value.length > max) {
        return {
          maxLength: {
            requiredLength: max,
            actualLength: control.value.length,
          },
        };
      }
      return null;
    };
  }

  public static onlyLetters(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = /^[a-zA-ZÀ-ÿ\s'-]+$/; // Permite letras e acentos
      if (control.value && !regex.test(control.value)) {
        return { onlyLetters: true };
      }
      return null;
    };
  }
}
