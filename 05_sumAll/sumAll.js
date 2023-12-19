const sumAll = function(num1, num2) {
if(num1 < 0 || num2 <0){
    return "ERROR";
}// negative number error
if(typeof num1 != "number" || typeof num2 != "number"){
    return "ERROR"
}// non number input error
let max;
let min;
if(num2 > num1){
max = num2;
min = num1;
}
else{
    max = num1;
    min = num2;
}

let sum = 0;

while(min <= max){
    sum = sum +min;
    min++;
}
return sum;
}
// Do not edit below this line
module.exports = sumAll;
