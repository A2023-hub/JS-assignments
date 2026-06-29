//question1
// let num = parseInt(prompt("Enter a number"));
// let count = 0;
// while (num > 0) {
//     count++;
//     num = Math.floor(num/10);
// }
// console.log(count);

// question2
// num = parseInt(prompt("Enter a number"));
// count = 0;
// while (num > 0) {
//     let digit = num % 10;
//     if (digit == 5) {
//         count++;
//     }
//     num = Math.floor(num/10);
// }
// console.log(count);

//question3
// let num=parseInt(prompt("Enter number"))
// let sum=0;
// for (let i = 1; i <= num; i++) {
//     if (i % 2 == 0) {
//         sum = sum + i;
//     }
// }
// console.log(sum);

// //question4
// num=[3,5,2,6]
// res=num.reduce((a,b)=>a+b)
// console.log(res);

// //question5
// let n=parseInt(prompt("Enter number"))
// console.log(2);
// for (let i = 3; i <= n; i++) {
//     if (i % 2 != 0) {
// console.log(i);
//     }
// }

//question6
// n = parseInt(prompt("Enter number"));
// for (let i = 1; i <= n; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern = pattern + "*";
//     }
//     console.log(pattern);
// }

//question7
// let num = Number(prompt("Enter number"));
//  let count = 0;
// for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         count++;
//     }
// }
// if (count == 2) {
//     console.log("Prime Number");
// } else {
//     console.log("Not a Prime Number");
// }

// //question8
// num=parseInt(prompt("Enter number"))
// for (let i = 1; i <= num; i++) {
//     console.log(i)
// }

//question9
let num=parseInt(prompt("Enter number"));
for (let i=1;i<=10;i++){
    console.log(num*i);
}
