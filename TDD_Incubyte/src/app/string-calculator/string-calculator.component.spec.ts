import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringCalculatorComponent } from './string-calculator.component';

describe('StringCalculatorComponent', () => {
  let component: StringCalculatorComponent;
  let fixture: ComponentFixture<StringCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StringCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 0 for an empty string', () => {
    expect(component.add('')).toBe(0);
  });

  it('should return the number itself if only one number is provided', () => {
    expect(component.add('1')).toBe(1);
  });

  it('should return the sum of two numbers separated by a comma', () => {
    expect(component.add('1,5')).toBe(6);
  });

  it('should handle new lines between numbers', () => {
    expect(component.add('1\n2,3')).toBe(6);
  });

  it('should support custom delimiters defined in the format "//[delimiter]\\n[numbers]"', () => {
    expect(component.add('//;\n1;2')).toBe(3);
  });

  it('should throw an exception when negative numbers are passed', () => {
    expect(() => component.add('1,-2,3')).toThrowError('negative numbers not allowed: -2');
  });

  it('should throw an exception listing all negative numbers', () => {
    expect(() => component.add('1,-2,-5,3')).toThrowError('negative numbers not allowed: -2,-5');
  });

  it('should ignore numbers greater than 1000', () => {
    expect(component.add('2,1001')).toBe(2);
  });
});
