import { Component, OnInit } from '@angular/core';

import { RegisterComponent } from '../auth/register/register.component';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  standalone: true,
  imports: [RegisterComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
