// 14. sort() Method

let arr5 = [10,9,8,7,6,5,4,3,2,1,];
console.log(arr5.sort()); //[ 1, 10, 2, 3, 4,5,  6, 7, 8, 9]

let arr6 = [10,11,20,8,20,59,22,49,30];
console.log(arr6.sort());
// output    8 10 11 20 22 29 39 49 59 

let arr7 = [10,11,20,8,20,59,22,49,30];
console.log(arr7.sort((a,b)=> a-b)); // output [8, 10, 11, 20, 20,22, 30, 49, 59]

console.log("testing");  // testing

let add = [3,2,4,5,6,7,8,9,0];
console.log(add.sort()); // output [0, 2, 3, 4, 5,6, 7, 8, 9]

let add1 = [3,2,1,4,6,5,8,7,9,0];
console.log(add1.sort((b,a) => b-a)); // output [0, 1, 2, 3, 4,5, 6, 7, 8, 9]

 