import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgIf } from '@angular/common';
import { TransactionService } from '../../services/transaction.service';
import { Transactions } from 'src/app/core/models/transactions';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-transaction-update',
  templateUrl: './transaction-update.component.html',
  styleUrls: ['./transaction-update.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    NgIf,
  ],
})
export class TransactionUpdateComponent implements OnInit {
  form = this.formBuilder.group({
    id: [''],
    name: [''],
    value: [0],
    type: [''],
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: TransactionService
  ) {}

  ngOnInit() {
    let transaction: Transactions = this.route.snapshot.data['transactions'];
    this.form.patchValue({
      id: transaction.id,
      name: transaction.name,
      value: transaction.value,
      type: transaction.type,
    });

    let json = JSON.stringify(transaction);

    return json;
  }

  onUpdate() {
    const transaction = this.form.value;
    const id = this.form.controls.id.value;

    this.service
      .update(id, transaction)
      .subscribe(pipe(response => (response = transaction)));

    return this.onBack();
  }

  getErrorMessage() {
    if (this.form.controls.name.hasError('required')) {
      return 'Verifique os dados digitados.';
    }

    if (this.form.controls.value.hasError('required')) {
      return 'Verifique os dados digitados.';
    } else {
      return this.form.controls.name.hasError('name')
        ? 'Verifique o campo.'
        : '';
    }
  }

  onBack() {
    this.router.navigate(['']);
  }
}
