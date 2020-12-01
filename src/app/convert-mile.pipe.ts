import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMile'
})
export class ConvertMilePipe implements PipeTransform {

  transform(value: any, targetUnit: string): any {
    if(!value){
        return '';
    }

    switch(targetUnit){
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      case 'cm':
        return value * 1.60934 * 1000 * 1000;
      default:
        throw new Error('invlid unit!');
    }

    return value * 1.60934;
  }

}
