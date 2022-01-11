let num = "?";

if (num == 5) {
  console.log("equal");
} else if (num < 5) {
  console.log("less than 5");
} else if (num > 5) {
  console.log("greater than 5");
} else {
  console.log("invalid value");
}

//ternary operator 

//if else 
 (num==5) ? console.log("true") : console.log("false");

//switch case 

let num1= 5;
let num2 =6;
// a+b ( a,b -> operands , + operator )
let opr = "&" ;

switch(opr){
    case "+" : console.log(num1+num2); break;
    case "-" :console.log(num1-num2); break;
    case "*" :console.log(num1-num2); break;
     default : console.log("Invalid operation");
}

