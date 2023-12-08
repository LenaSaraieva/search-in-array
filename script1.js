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
