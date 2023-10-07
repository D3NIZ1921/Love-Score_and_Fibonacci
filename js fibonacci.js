function fibonacciGenerator(n) {
  

  var fib = [0, 1]; 

  if (n === 1) {
    fib = [0]; 
  } else if (n > 1) {
    for (var i = 2; i < n; i++) {
      var nextElement = fib[i - 1] + fib[i - 2]; 
      fib.push(nextElement); 
    }
  }

  return fib;

  

  
}

var n = 100; 
var result = fibonacciGenerator(n);
console.log(result);