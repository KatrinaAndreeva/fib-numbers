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


//3 recur

function fib1(n){
    if(n==0) return 0;
    if(n==1) return 1;
    return fib1(n-2)+ fib1(n-1);
}

alert(fib1(n));


//4 array
let fibArr = [1, 1];
for(let i = 0; i < n-2; i++) {
  fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
 
}
 document.write(fibArr);

