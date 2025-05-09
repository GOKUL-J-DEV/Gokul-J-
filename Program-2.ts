function printOdd(n: number): void {
  let total: number = 1;
  let result: number[] = [];
  for (let i = 0; i < n; i++) {
    result.push(total);
    total = total + 2;
  }
  //Output
  console.log(result);
}
//Input
printOdd(4);
