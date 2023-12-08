let arr = [3,18,7,-3,12];
let sum = 0;
let i = 0;

do {
    sum = sum + arr[i];
    i++
} while 
    (i < arr.length);

console.log(sum);
let result = sum / arr.length; // середнє арифметичне 
console.log(result);

let maxNumber = arr[0];
i = 1; 

do {
    if (arr[i] > maxNumber) {
    maxNumber = arr[i];
} 
i++;
} while 
(i < arr.length);


console.log(maxNumber);//найбільше число 

let minNumber = arr[0];
i = 1; 

do {
    if (arr[i] < minNumber) {
    minNumber = arr[i];
} 
i++;
} while 
(i < arr.length);


console.log(minNumber);//найменше число 