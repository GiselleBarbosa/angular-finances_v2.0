import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  authorName = 'Giselle Barbosa';
  currentYear: number;

  constructor(private footerService: FooterService) {
    this.currentYear = this.footerService.getCurrentYear();
  }
}
