import { Component, OnInit } from '@angular/core';

import { ButtonsComponent } from 'src/app/shared/buttons/buttons.component';
import { LoginModalComponent } from '../../features/auth/login-modal/login-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [ButtonsComponent, LoginModalComponent, MatIconModule],
})
export class HeaderComponent implements OnInit {
  btnlogin: string = 'login';
  btnlogout: string = 'logout';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onlogout(): void {
    console.log('logout');
    this.router.navigate(['/']);
  }
}
