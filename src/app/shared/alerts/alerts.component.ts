import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
})
export class AlertsComponent implements OnInit {
  title: string = 'Cadastrado realizado';
  data: string = 'Usuário informado foi cadastrado com sucesso!';

  constructor(@Inject(MAT_DIALOG_DATA) public text: string) {}

  ngOnInit(): void {}
}
