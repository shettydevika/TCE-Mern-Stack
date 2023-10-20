console.log("Today is FRIDAY");
console.log(3+5)

//document.write("<br> <h1> Javascript is a Programming language");

//variabled
var num1=54
console.log(num1);

//redeclare variables and re-assign new values
var num2=65
num2=19
console.log(num2);

//cannot redeclares variables using let
let num3=10
//let num3=20
num3=30
console.log(num3);

//using constant variables
const num4=99
//cannot redeclare he variable
//const num4=25
//num4=90
console.log(num4);


/*DataTypes: 
->Primitive: number,string,boolean,undefined,null,
->Non-Primitive:
*/


//Null and undefined
/*let a;
console.log(typeof a); //undefined
let b = null;
console.log(typeof b);//object*/

let person= {
    name: "Devika Shetty", 
    age:20,
    gender:"Female",
    email:"devi@gmail.com",
    mob:9876543210,
};

console.log(person);
document.write(person.name);

let vehicle=["car","bus","truck","train"];
console.log(vehicle[2]);
console.log(vehicle.length);

// function mul(p,q,r) {
//     return p*q*r;
// }
// document.write(mul(2,3,4));

function greeting() {
    alert("Good Afternoon");
}


let x = 5
x+=6
console.log(x);

/*let a=5
let b="5";
console.log(a==b);//true
console.log(a===b);//false
*/

let age=35;
/*if (age>=18) {
    document.write("Eligible for Vote");
}else{
    document.write("Not Eligible");
}*/

/*if (age<18) {
    dodocument.write("Child");
} else if(age >=18 && age<=35) {
    dodocument.write("Adult");
} else{
    dodocument.write("Old");
}*/

/*for(initialization;CSSConditionRule;incrementor decrement){

}*/
for(let i=1;i<=10;i++){
    console.log(i);
}


/*DOM Manipulation
document.getElementById(id)--	Find an element by element id
document.getElementsByTagName(name)--	Find elements by tag name
document.getElementsByClassName(name)--	Find elements by class name
document.querySelector()
document.querySelectorAll()
*/

// let el=document.getElementById("head").innerHTML;
// console.log(el);

// let el =document.querySelector("#head").innerHTML;
// console.log(el);
