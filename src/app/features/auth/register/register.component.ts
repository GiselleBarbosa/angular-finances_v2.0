import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  formulario = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(12),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(9),
    ]),
  });

  constructor(public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.addClassValidate;
  }

  public onSubmit(e: Event) {
    if (this.formulario.valid) {
      e.preventDefault();
      this.dialog.open(AlertsComponent, {
        data: {
          title: 'Cadastro Realizado',
          message: 'Usuário foi cadastrado com sucesso!',
        },
      });
      this.reset();
    } 
  }

  /* Resetando formulario apos envio */
  public reset() {
    this.formulario.reset();
  }

  /* Checando formulario  */
  public checkValidTouched(campo: string) {
    return (
      !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched
    );
  }

  /* Adicionando class invalid no template*/
  public addClassValidate(campo: string) {
    return {
      'is-invalid': this.checkValidTouched(campo),
    };
  }
}
