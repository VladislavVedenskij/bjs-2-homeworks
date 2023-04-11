function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } 
    if (arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];

  }

  avg = sum / arr.length
  avg = Number(avg.toFixed(2));

  return { min: min, max: max, avg: avg };

}


function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0
  }

  let sum = arr.reduce(function(a, b) {
  return a + b;
  })
  return sum
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min
}


function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  arr.forEach(element => {
    if (element % 2 === 0) {
      sumEvenElement += element;
    }   else {
      sumOddElement += element;
    }
  });
  return sumEvenElement - sumOddElement
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;
  arr.forEach(element => {
    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement++;
    }
  });
  return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
   
   for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
   }
   }
   return maxWorkerResult
  }


