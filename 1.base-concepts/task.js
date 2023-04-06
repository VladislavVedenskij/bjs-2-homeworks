"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let discr = b ** 2 - 4 * a * c;
  console.log(discr)
  if (discr === 0) {
    let solution = -b/(2*a)
      arr.push(solution)
      return arr
  } else if (discr > 0) {
    let firstSolution = (-b + Math.sqrt(discr))/(2 * a);
    let secondSolution = (-b - Math.sqrt(discr))/(2 * a);
    arr.push(firstSolution, secondSolution);
    return arr
  } else { 
    return arr;
  }  
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  // попытка проверки аргументов на числа
  const isNumeric = n => !!Number(n);
    for (let i = 0; i <= arguments; i++) {
    if (isNumeric(arguments[i]) == false) {
      return false
    } 
  }
  // расчёт
  percent /= 100;
  let percentInMonth = percent / 12;
  let bodyAmount = amount - contribution;
  let payment = bodyAmount * (percentInMonth + (percentInMonth / (((1 + percentInMonth) ** countMonths) - 1)))
  let fullPayment = payment * countMonths + contribution;
  
  return +fullPayment.toFixed(2)
  
}

console.log(calculateTotalMortgage(10, 20000, 20000, 24))



