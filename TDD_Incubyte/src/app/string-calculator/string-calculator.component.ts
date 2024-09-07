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
    const numArray = numbers.split(',').map(num => parseInt(num));
    return numArray.reduce((sum, current) => sum + current, 0);
  }
}
