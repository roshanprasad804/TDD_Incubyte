import { Component } from '@angular/core';

@Component({
  selector: 'app-string-calculator',
  standalone: true,
  imports: [],
  templateUrl: './string-calculator.component.html',
  styleUrl: './string-calculator.component.css'
})
export class StringCalculatorComponent {
  constructor() {}

  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }
    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
      numbers = numbers.substring(delimiterEndIndex + 1);    
    }
    
    const numArray = numbers.split(delimiter).map(num => parseInt(num));
    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed: ${negativeNumbers.join(',')}`);
    }
    return numArray.reduce((sum, current) => sum + current, 0);
  }
}
