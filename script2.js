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

do {let i = 1; 
    i++
} while 
(i < arr.length);
{
    if (arr[i] > maxNumber) {
        maxNumber = arr[i];
    }
}
console.log(maxNumber);//найбільше число 