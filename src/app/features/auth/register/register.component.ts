import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';
import { FormService } from './services/form.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class RegisterComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private formService: FormService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.formulario = this.formService.initRegisterForm();
  }

  getErrorMessage(controlName: string): string {
    const control = this.formulario.get(controlName);
    return this.formService.getErrorMessage(control, controlName);
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      this.dialog.open(AlertsComponent, {
        data: {
          title: 'Cadastro Realizado',
          message: 'Usuário foi cadastrado com sucesso!',
        },
      });
      this.formulario.reset();
    }
  }
}
