// 1 решение по формуле Бине

function fibonacci(n) {
  var sq5 = Math.sqrt(5); 
  var a = (1 + sq5) / 2;
  var b = (1 - sq5) / 2;
  return (Math.pow(a, n) - Math.pow(b, n)) / sq5;
}

let n = parseFloat(prompt('Enter n'));

alert('your number is  ' + Math.round(fibonacci(n))); 



// 2 recur
// let n = parseFloat(prompt('Enter n'));
function func(n) {
  return n <= 1 ? n : func(n - 1) + func(n - 2);
}
alert(func(n)); 



// function fib2(n) { 
//   if (n >= 1) {
//   return fib2(n - 1) + fib2(n - 2);
//   // return n <= 1 ? n: fib2(n - 1) + fib2(n - 2);
//   }
// }
// alert(fib2(n));

//array
// let fibArr = [1, 1];
// for (n = 0; n < fibArr.length; n++) {
//   fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
// }
// alert (fibArr.push[n]);
