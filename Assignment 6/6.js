//question1
// let hour = parseInt(prompt("Enter hour"));
// let minute = parseInt(prompt("Enter minute"));
// let hourAngle = (hour % 12) * 30 + minute * 0.5;
// let minuteAngle = minute * 6;
// let angle = Math.abs(hourAngle - minuteAngle);
// if (angle > 180) {
//     angle = 360 - angle;
// }
// console.log(angle);

// //question2
// let year=parseInt(prompt("Enter year"))
// if ((year % 400==0)||(year % 4 ==0 && year % 100 !=0)){
//     console.log("leap year");
// }
// else{
//     console.log("not a leap year");
// }

// question3
// let num = parseInt(prompt("Enter a number"))
// let sum = 0
// for (let i = 1; i<num; i++) {
//     if (num % i == 0) {
//         sum += i
//     }
// }
// if (sum == num) {
//     console.log("Perfect Number");
// } else {
//     console.log("Not a Perfect Number");
// }

//question4
let n=parseInt(prompt("enter number"))
let reverse = 0;
while (n > 0) {
    let digit = n % 10;
    reverse = reverse * 10 + digit;
    n = Math.floor(n / 10);
}
console.log(reverse);

//question5
let s1 = parseInt(prompt("Enter first string"));
let s2 = parseInt(prompt("Enter second string"));
if (s2.includes(s1)) {
    console.log("s1 is a substring of s2");
} else {
    console.log("s1 is not a substring of s2");
}