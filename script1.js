let arr = [3,18,7,-3,12];
let sum = 0;
let i = 0;

while (i < arr.length) {
    sum = sum + arr[i];
    i++
}
console.log(sum); // сума всіх елементів 

let result = sum / arr.length; // середнє арифметичне 
console.log(result);


let maxNumber = arr[0];
let i = 1;

while(i < arr.length) {
   
    if (arr[i] > maxNumber) {
        maxNumber = arr[i];
    }
    i++;
}
console.log(maxNumber);//найбільше число 

let i = 1;
let minNumber = arr[0];

while(i < arr.length) {
    
    if (arr[i] < minNumber) {
        minNumber = arr[i];
    }
    i++;
}
console.log(minNumber);//найменше число 