//1
function myFunction (){
    console.log('a');
}
myFunction();

//2

function sum (a, b){
    let add = (a+b)
    console.log(a+b);

}
sum(3,4);

//3

const A= () =>{
    console.log('hello Nilesh');
}
A();


// Q5.
// "Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

// Q6
// "Print output
var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};

// Q7
function factorial(n){
    let number = 1;
    if(n == 0 || n == 1){
        return number;
    }
    else if(n>1){
        for(var i=n; i>=1; i--){
            number = number*i;
        }
        return number;
    }
   
}
let n = 6;
number = factorial(n)
console.log('Factorial of ' + n + ' : ' + number);

// Day2

// Q1
// "Guess the Output
function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`I am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 12));

// Q2
// "Guess the output

Abc();
const Abc = function(){
    let value = 20;
    console.log(value);
}

// Q3

// "Guess the output

var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();

// Q4
// "Guess the Output
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")