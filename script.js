// массив - [3,18,7,-3,12] тремя способами найти:
// 1 - сумму всех элементов;
// 2 - самое маленькое число;
// 3 - самое большое число;
// 4 - среднее арифметическое всех элементов массива;
// должно работать с любыми массивами (если его измениь)

let arr = [3,18,7,-3,12];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum); // сума всіх елементів 


let result = sum / arr.length; // середнє арифметичне 
console.log(result);


/*for (let i = 0; i < arr.sort(function(a, b) { return a - b; }); i++) {
    let minNumber = arr[i];
    console.log(minNumber);
}*/
 


//let maxNumber = 