// let x = 0;
// let arr = [1,2,8,7,2,4,];

// arr.forEach(element => {
//     x += element;
// });

// console.log(x);


// let i;
// for(i=0; i<=100; i++){
//     console.log(i);
// }


// let input = Number(prompt("Enter the nu8mber to check Even or odd : "));

// let input = 5;

// checkNum(input);

// function checkNum(input){
//     if(input%2 === 0) console.log("Even number");
//     else console.log("odd number")
// }


// let input = "Priyanshu";
// let reverse = "";

// for(let i=input.length-1; i>=0; i--){
//     reverse += input[i];
// }

// console.log("Reverse String is : " +reverse);


// let number = 25;

// function findFactorial(num){

//     for(let i=0; i<num; i++){
//         if(num%i===0) console.log(i);
//     }
// }

// findFactorial(number);


let name = "RAMMA";

function findPalindrome(name){
    let i=0;
    let j=name.length-1;

    while(i<j){
        if(name[i]!=name[j]) return false;
        i++;
        j--;
    }

    return true;
}

console.log(findPalindrome(name));
