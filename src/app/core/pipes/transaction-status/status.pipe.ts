import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true,
})
export class StatusPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Pago':
        return 'done';
      case 'Pendente':
        return 'close';
    }
    return 'close';
  }
}
