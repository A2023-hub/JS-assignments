//question 1
let S="AbaDdDH"
let A=0;
let D=0;
for(let i=0;S[i] !=undefined;i++){
    if(S[i]=="A"){
        A++;
    }
    if(S[i]=="D"){
        D++;
    }
}
console.log(A,D);

//question2
S="Prepbytes"
let p=0
let e=0
for(let i=0;S[i] !=undefined;i++){
    if(S[i]=="p"){
        p++;
    }
    if(S[i]=="e"){
        e++;
    }
}
if(p>1){
    console.log(p)
}
if(e>1){
    console.log(e)
}

//question3
S="Hello My NAME is Aemie"
let count=0
for(let i=0;S[i] !=undefined;i++){
if(
    S[i]=="a"||
    S[i]=="e"||
    S[i]=="i"||
    S[i]=="o"||
    S[i]=="u"||
    S[i]=="A"||
    S[i]=="E"||
    S[i]=="I"||
    S[i]=="O"||
    S[i]=="U"
){
    count++;
}
}
console.log(count);

//question4
let S1="insta"
let S2="gram"
let result=""
for(let i=0;S1[i] !=undefined;i++){
    result +=S1[i]
}
for(let i=0;S2[i] !=undefined;i++){
    result +=S2[i]
}

console.log(result);

//question5
S = "ExaggeRATE";

count = 0;

while (S[count] != undefined) {
    count++;
}

console.log(count);

//question6
S="AABRACADABRAA"
A=0
D=0
for(let i=0;S[i] !=undefined;i++){
    if(S[i]=="A"){
        A++;
    }else{
        D++;
    }
}
    if(A>D){
        console.log("Aditya");
    }
    else if(D>A){
        console.log("Danish");
    }
    else{
        console.log("Draw");
    }

    //question7
 S="Snap"
 let R="chat"  
 let res=""
 for(let i=0;S[i] !=undefined;i++){ 
    res +=S[i]
    }
    for(let i=0;R[i] !=undefined;i++){ 
    res +=R[i]
    }
    console.log(res);

//question8
S = "naman";
let len = 0;
while (S[len] != undefined) {
    len++;
}
let flag = true;
for (let i = 0; i < len / 2; i++) {

    if (S[i] != S[len - 1 - i]) {
        flag = false;
        break;
    }
}
if (flag) {
    console.log("True");
}
else {
    console.log("False");
}

//question9
 S = "I am Aditi Mittal";
 len = 0;
while (S[len] != undefined) {
    len++;
}
let reverse = "";
for (let i = len - 1; i >= 0; i--) {
    reverse += S[i];
}
console.log(reverse);

//question10
S1= 12345
S2= 57373
if(S1 == S2){
    console.log("YES");
}else{
    console.log("NO");
}
    
//question11
 S = "Hi, I am his friend.";
let pattern = "friend";
let text = "girlfriend";

console.log("Hi, I am his " + text + ".");

//question12
S = "I am Meera Mittal";
let word = "";
for (let i = 0; S[i] != undefined; i++) {
    if (S[i] == " ") {
        console.log(word);
        word = "";
    }
    else {
        word += S[i];
    }
}
console.log(word);

question13
S = "Methodology"
let  vowels = 0
let consonants = 0
for (let i = 0; S[i] != undefined; i++) {
    if (
        S[i] == "a" ||
        S[i] == "e" ||
        S[i] == "i" ||
        S[i] == "o" ||
        S[i] == "u" ||
        S[i] == "A" ||
        S[i] == "E" ||
        S[i] == "I" ||
        S[i] == "O" ||
        S[i] == "U"
    ) {
        vowels++;
    }
    else {
        consonants++;
    }
}
console.log(vowels);
console.log(consonants);