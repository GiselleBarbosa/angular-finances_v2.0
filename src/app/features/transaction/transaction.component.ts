import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { SharedDataService } from './services/shared-data.service';
import { TransactionService } from './services/transaction.service';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';
import { Transactions } from 'src/app/core/models/transactions';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  standalone: true,
  imports: [
    TransactionTableComponent,
    ReactiveFormsModule,
    NgIf,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class TransactionComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    value: new FormControl(null, [Validators.required]),
    type: new FormControl('', [Validators.required]),
  });

  body?: Observable<Transactions[]>;

  resultCalculate?: number[] = [0];

  constructor(
    private service: TransactionService,
    private sharedData: SharedDataService,
  ) {}

  ngOnInit() {
    /* usando service para se inscrever na variavel do componente irmao */
    this.sharedData.values$.subscribe((values) => {
      this.resultCalculate = values;
    });
  }

  onSave() {
    /*metodo criado no template - evento de click */
    this.formValues();
  }

  formValues() {
    let body = {
      name: this.form.controls.name.value,
      value: this.form.controls.value.value,
      type: this.form.controls.type.value,
    };

    if (this.form.valid || null || undefined) {
      this.service.create(body).subscribe((response) => response);
      alert('Adicionado com sucesso!');
    } else {
      return alert('Verifique se os campos estão preenchidos corretamente.');
    }

    location.reload();

    return;
  }

  getErrorMessage() {
    if (this.form.controls.name.hasError('required')) {
      return 'Este campo precisa ser preenchido.';
    }

    if (this.form.controls.value.hasError('required')) {
      return 'Este campo precisa ser preenchido.';
    }

    if (this.form.controls.value.hasError('required')) {
      return 'Verifique os dados digitados.';
    } else {
      return this.form.controls.name.hasError('name') ? 'Erro.' : '';
    }
  }
}
