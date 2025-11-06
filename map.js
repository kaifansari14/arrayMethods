// 21. map () Method 

let numbers = [1,2,3,4,5,]
// forEach
numbers.forEach((x)=> {
    console.log(x);
});

console.log(numbers); // 12345
let final = numbers.map((x)=> x*2);
console.log(final);
console.log(numbers);


let a1 = [10,20,30,40];
let a2 = [50,60];

console.log(a1);

let a3 = a1.concat(a2);
console.log(a3);

console.log();
