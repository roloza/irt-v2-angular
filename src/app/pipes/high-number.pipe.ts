import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highNumber'
})
export class HighNumberPipe implements PipeTransform {

  public symbols:Array<string> = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  public symbolNames:Array<string> = ['millier', 'million', 'milliard', 'billion', 'billiard', 'trillion', 'trilliard', 'quatrillion'];

  transform(n: number): string { 
    if (n >= 1e24) {
      return this.formatedNumber(n, 1e24, 7);
    }
    if (n >= 1e21) {
      return this.formatedNumber(n, 1e21, 6);
    }
    if (n >= 1e18) {
      return this.formatedNumber(n, 1e18, 5);
    }
    if (n >= 1e15) {
      return this.formatedNumber(n, 1e15, 4);
    }
    if (n >= 1e12) {
      return this.formatedNumber(n, 1e12, 3);
    }
    if (n >= 1e9) {
      return this.formatedNumber(n, 1e9, 2);
    }
    if (n >= 1e6) {
      return this.formatedNumber(n, 1e6, 1);
    }
    /*if (n >= 1e3) {
      return this.formatedNumber(n, 1e3, 0);
    }*/
      return Math.round(n).toLocaleString().toString();

  }
  
  formatedNumber(n:number, e:number, i:number) {
    let roundNumber =  Math.round(n / e);

    /*if (roundNumber === 1) {
      return this.capitalize(this.symbolNames[i]);
    } */
    let plurial = roundNumber >= 2 ? 's' : '';
    if (e > 1e3) {
      return (n / e).toFixed(1).replace('.0','') + " " +  this.capitalize(this.symbolNames[i]) + plurial;
    }
    return roundNumber + " " +  this.capitalize(this.symbolNames[i]) + plurial;
  }

  capitalize = (s:string) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

}