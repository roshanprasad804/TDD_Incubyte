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
    return parseInt(numbers);
  }
}
