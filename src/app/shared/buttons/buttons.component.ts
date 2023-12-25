import { Component, Input, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
export class ButtonsComponent implements OnInit {
  @Input() btnTxt: string = '';

  constructor() {}

  ngOnInit(): void {}
}
