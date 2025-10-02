//Uppgifter
/* Annika Ahlström
2025-10-01
annikaahl92@gmail.com
 */

/*
console.log("Hello World!");
console.log("It's a sunny day!"); console.log("Not") ;
console.log("Tomorrow it will be sunny!");
// Detta är ett test
/*
console.log("Look at the weather app");
  */
// Uppgifter
/*
const exampleString = "Hello again!";
console.log(exampleString);
*/

/*
Uträkning

let numberofbottles = 10
console.log(numberofbottles);
const line1 = "Green bottles hanging on the wall";
console.log(line1);
let numberoflessbottles = 9
const line2 = "and if one green bottle, should accidentally fall, there will be";
console.log(line2);
console.log (numberoflessbottles);

  */

/*
Uppgifter:

let number= 4;
number -= 2;
console.log(number);

let x = 5+5;
let y = 10+10;
let z = x+y;
console.log(z);

let seconds = 60
seconds *= 3
console.log(seconds);

let number1 = 11;
let number2 = 4;
let output = number1/number2;
console.log(output);

let kmh = 72
let ms = 1440
let speed = ms/kmh;
console.log(speed);

let times = 3
let second = 60
let time = second * times;
console.log(time);

let int = 10;
function myfirstfunction(i) {
  console.log(i);
}
myfirstfunction(int);

//Hur man får ut en negation

function testing(a,b){
  c = a+b;
  return c;
}

console.log(z);
let results;
results = testing(11,-22);
console.log(results);


// Jobb med att räkna ut BMI
function bmi(w,h){
  bmi = w/(h * h);
  return bmi;
}

let vikt = 70;
let längd = 1.82
let resultat =bmi(vikt,längd)

console.log(resultat);
*/

/*

Ny typ av uträkning:
const string = "Green bottles hanging on the wall ";
let numberofbotles = 10;


console.log(numberofbotles+" " + string + "."+ numberofbotles +" " + string);
-- numberofbotles;
const string2 = "And if one green bottle, should accidentally fall, there will be"+" " +numberofbotles;
console.log (string + string2)
*/


/*

Kolla igenom!

const string = "Rabbits are jumping"
 /*
let numberofrabbits = 10;

console.log(numberofrabbits +" "+ string);

const string2 = "Jumped away";

for (let i = numberofrabbits; 0 >= i; i--) {
  if (i === numberofrabbits) {
    console.log(string2 + i + string);
  }
  console.log(i+ string + ". " + i + string2);
 */

/*let bool = true;
console.log(bool);
console.log(!bool);
*/

/*
const age = 24;
const birthyear = 2002;
console.log(age == 24 || birthyear == 2002);

|| = or
&& = and
*/

/* få fram en siffra:

 /*
const age = 24;
const birthyear = 2002;
let condition = age== 26 || birthyear==2002;
console.log (condition);

function getage() {
  return age;
}
console.log (age);
let results = getage ();

results= 26;
console.log(results);
*/

/* true eller false, tänk filter på hemsida

let bool = false;
bool = !bool;

console.log(bool);
*/

/* Uppgift P7 Boolean:

const birthYear = 2000;
const currentYear = new Date() .getFullYear();
const age = currentYear - birthYear;

let isChild = age >= 0 && age<=12;
let isTeenager = age >= 13 && age <=17;
let isAdult = age >= 18;

console.log("Age", age);
console.log("isChild", isChild);
console.log("isTeenager", isTeenager);
console.log("isAdult", isAdult);
*/

/* let girl = "ischild"
let isgreater = 0>10;
console.log(birthyear+girl+isgreater);

const newyear= 2000;
let girl2 = "isteenager"
let isless = 11>17;
console.log(newyear+girl2+isless);

const birthyear2 = 2000;
let girl3 = "isadult"
let istrue = 0<=18;
  console.log(birthyear2+girl3+istrue);
*/

/* Alla mellan 18-85 kan köpa öl
const age = 65;
if(age >= 18 && age<= 85){
  console.log("You can buy beer");
}
*/

/*
18 blir exkluderat med !
const age = 19;
if(age !==18){
  console.log ("You can buy toys");
}
*/

/*
const age = 18;
if(age !==18){
  console.log ("You can buy toys");
} else if (age!=58 && age!=18){
  console.log ("You can buy toys");
}else{ console.log("This will always print");
}
*/

/* funktioner
function makelasagna (){
  console.log("Fry meat.");
  console.log("Cut onions.");
  console.log("Fry onions.");
  console.log("Add tomato sauce.");
  console.log("Add spices.");
  console.log("Boil.");
}
makelasagna();
let ishungry=false;
//breakfast
if(ishungry){
  makelasagna();
}

//lunch
ishungry = true;

if(ishungry) {
  makelasagna();
  makelasagna();
}
//dinner
*/

/* Listor
let listexample = [1,2,3,4]
listexample.forEach(char=> console.log(char));
*/

/* Uppgift
function moveforward(){
  console.log("move forward");
}
moveforward()
moveforward()
moveforward()


function moveright(){
  console.log("move right");
}
moveright()
moveright()
*/

/*function test(bla,number) {

  return bla*number;
}
let results = test(5, 5);
console.log(results);
*/

function matte(tal1){

  return tal1*tal1
}
let results =matte (4);
console.log(results);

function matte2(talet, talet2) {
  return talet-talet2;
}
let results2 =matte2(6,2);
console.log(results2);



function välkommen(name1, name2) {
  return "Welcome"+ " " +name1+" "+name2+"!";
}
console.log(välkommen("Ben","Ting"));
