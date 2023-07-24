import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
