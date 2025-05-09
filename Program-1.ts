// Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.

class Calculator {
    a: number;
    b: number;
    operationName: string;
  
    constructor(a: number, b: number, operationName: string) {
      this.a = a;
      this.b = b;
      this.operationName = operationName.toLowerCase();
    }
  
    calculate(): number | string {
      switch (this.operationName) {
        case 'add':
          return this.a + this.b;
  
        case 'subtract':
          return this.a - this.b;
  
        case 'multiply':
          return this.a * this.b;
  
        case 'divide':
          return this.a / this.b;
  
        default:
          return "Invalid operatioon";
      }
    }
  }
  
  //Create object of class
  const calcc1 = new Calculator(10, 5, 'add');
  console.log('Result:', calcc1.calculate());
  
  const calc2 = new Calculator(10, 2, 'divide');
  console.log('Result:', calc2.calculate()); 
  