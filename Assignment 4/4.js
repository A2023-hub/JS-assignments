// question 1
let numbers=[3,5,2,6]
let res=numbers.reduce((a,b)=>a*b)
console.log(res);
                                    //for empty, it is imp to provide the initial value otherwise
                                    //  it returns error and that's how reduce method work
//question 2
numbers=[3,5,2,6]
res=numbers.reduce((a,b)=>a+b)
console.log(res);

//question 3
numbers=[3,5,2,6,3,9,0,3,2,1]
res=numbers.reduce((a,b)=>{
if(b===2){
a++;
}
return a;
},0)
console.log(res);

//question 4
let A=[3,5,2,6,4,9,0,8,7,1]
let evenSum=0
let oddSum=0
for(let i=0;i<A.length;i++){
if(A[i]%2===0){
    evenSum +=A[i];
}  else{
    oddSum +=A[i];
} 
}
let B=[evenSum,oddSum]
console.log(B);

//question 5
let arr=[1,4,9,16]
let result=arr.includes(5)
console.log(result);

//question 6
A=[34,11,19,50,34,78]
let age=[]
for(let i=0;i<A.length;i++){
if(A[i]>=18){
    age.push(A[i]);
}
}
console.log(age);

//question 7
let ar=[1,2,3,4,5,6]
let arr1=[]
for(let i=0;i<ar.length;i++){
arr1.push(ar[i]+1);
}
console.log(arr1);

//question 8
A=[34,11,19,50,34,78]
 result='YES';
for(let i=0;i<A.length;i++)
if(A[i]<32){
   
    result='NO';
    
}
console.log(result);

//question 9
let N = [1, 2, 3, 2, 4, 5, 5];
let count = 0;

for (let i = 0; i < N.length; i++) {
    let freq = 0;

    for (let j = 0; j < N.length; j++) {
        if (N[i] === A[j]) {
            freq++;
        }
    }

    if (freq === 1) {
        count++;
    }
}

console.log(count);

//question 10
let P = [5, 2, 8, 1, 9, 3];

let max = P[0];
let min = P[0];

for (let i = 1; i < P.length; i++) {
    if (P[i] > max) {
        max = P[i];
    }

    if (P[i] < min) {
        min = P[i];
    }
}

console.log("Maximum", max); // 9
console.log("Minimum", min); // 1