import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calc',
  standalone: true
})
export class CalcPipe implements PipeTransform {

  transform(value: number,rate:number = 50): number {
    return value*rate;
  }

}
