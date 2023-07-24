import { Component } from '@angular/core';
import { NavigationComponent } from './template/navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NavigationComponent],
})
export class AppComponent {}
