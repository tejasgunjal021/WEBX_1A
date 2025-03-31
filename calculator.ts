function calculator(a: number, b: number, operator: string): number | never {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b === 0) {
          throw new Error("Division by zero is not allowed!");
        }
        return a / b;
      default:
        throw new Error(`Invalid operator: '${operator}'. Use +, -, *, or /.`);
    }
  }
  
  try {
    console.log(calculator(5, 3, "+"));
    console.log(calculator(5, 3, "-"));
    console.log(calculator(5, 3, "*"));
    console.log(calculator(5, 3, "/"));
    console.log(calculator(7, 0, "/"));
    console.log(calculator(10, 2, "%"));
  } catch (error) {
    console.error((error as Error).message);
  }