/*================= spread operator =============*/
/*
let poorCountry = ["bangladesh", "srilanka"];
let richCountry = ['china', 'netharland', 'pland']
richCountry.push(poorCountry)
console.log(richCountry);
*/

/*
let poorCountry = ["bangladesh", "srilanka"];
let richCountry = [...poorCountry, 'china', 'netharland', 'pland']
console.log(richCountry);
*/



/*================= Rest parameter =============*/
/*
function calculation (...numbers){
    let sum = 0;
    for(let i of numbers){
        // console.log(i);
        sum = sum + i;
        
    }
    console.log(sum);
}

calculation(1, 2, 3, 4, 5, 6, 7, 8, 9);
*/


/*
// rest parameter er sathe r o parameter use korte hole rest parameter er samne likhte hobe
function calculation(a,b,...numbers){
    let sum = 0;
    for(let i of numbers){
        // console.log(i);
        sum = sum + i;
        
    }
    console.log(sum);
}
calculation(10, 20, 1, 2, 3, 4)//aikhane 10, 20 holo a,b parameter er r bakigulo rest parameter er
*/

/*================ for loop ==============*/
/*
for(i = 0; i <=5; i++){
    console.log(`${i} Allah`);
}
*/


/*================ for of loop ==============*/
/*
var myCountry = ['dhaka', 'rangpur', 'barishal', 'khulna'];
for(let myCity of myCountry){
    console.log(`${myCity} is my Country`);
}
*/


/*================ for in loop ==============*/
// var mySelf = {firstname: "Md Abdul Aziz", lastName: "sarder", age: "27", city: "dhaka"}
// console.log(mySelf.firstname);
// console.log(mySelf.age);
/*
for(element in mySelf){
    console.log(element);
    console.log(element, mySelf[element]);
    // console.log(mySelf[element]);
}
*/

/*
// decision making
if(mySelf["city"] == "dhaka"){
    console.log('this is my town');
}
else if (mySelf['city'] == "tongi"){
    console.log('this is my job town');
}
else{
    console.log('this is not my town');
}
*/





/*================ simple function ==============*/
/*
function add(){
    var x = 10;
    var y = 20;
    var z = x + y;
    console.log(z);
}
add();
*/


/*================ Parameterized function ==============*/
/*
function addNumbers(a,b){
   var result = a + b;
   console.log(result);
}
addNumbers(5, 15);
*/

/*================ Rest Parameters ==============*/
// rest parameter er kaj holo j onkgulo value k array akare aksathe dekhano
/*
function restParameter(...numbers){
 
 console.log(numbers);
 console.log(numbers[0]);
 console.log(numbers[1]);
 console.log(numbers[2]);
}
restParameter(2, 4, 6, 8, 10, 20);
*/


/*
function calculation (...numbers){
    let sum = 0;
    for(let i of numbers){
        // console.log(i);
        sum = sum + i;
        
    }
    console.log(sum);
}

calculation(1, 2, 3, 4, 5, 6, 7, 8, 9);
*/


/*================ Anonymus function ==============*/
/*
var myFu = function (){
    return 'Hello';
}
console.log(myFu());
*/


/*================ Arrow function ==============*/
// ()=>{} //arrow function

/*
var myArrow = () => {
    console.log("My first Arrow function");
}
myArrow();
*/

/*
var myArrow = (x) => {
    console.log(x);
}
myArrow("My first Arrow function");
*/

/*
var myArrow = (...x) => {
    console.log(x);
}
myArrow(1, 2,3,4,5);
*/


/*
var myArrow=()=>{
    return "Hello world";
}
console.log(myArrow());
*/

/*================ Simple Arrays ==============*/
/*
var MyNumber = [1,2,3,4,5];
console.log(MyNumber);

var MyArray = ["a", "b", "c", "d", "e"]
for(let item of MyArray){
    console.log(item);
}
*/


/* ================ Multidimensional Arrays ============== */
/*
var bangladesh = ["dhaka", "tongi", "gazipur"]
var india = ["kasmir", "gujrat", "hindusthan"]
var china = ["hongkong", "sanghai", "osaka"]
var total = [bangladesh, india, china]
console.log(bangladesh[1]);
console.log(total[2]);
console.log(total[2][0]);
*/





/* ================ ES6 Array de-structuring ============== */
// de-structuring mane akti complex structure k venge venge prokas kora
// break down a complex structure into simpler parts

// var countries = ["Bangladesh", "India", "China", "Garmeny", "canada"];
// // var[a,b,c,d] = countries;
// // var[a,b] = countries;
// var[, , , a] = countries;
// console.log(a);


/* ================ ES6 Map() ============== */
/*
var map = new Map();

map.set('key1', 'Bangladesh');
map.set('key2', 'India');
map.set('key3', 'Canada');
map.set('key4', 'America');
console.log(map.values());
console.log(map.keys());
*/

/*
var mymMap = new Map();
mymMap.set('key1', 'Bangladesh');
mymMap.set('key2', 'India');
mymMap.set('key3', 'Canada');
mymMap.set('key4', 'America');
// console.log(mymMap.values());
// console.log(mymMap.keys());
for(let myValues of mymMap.values()){
    console.log(myValues);
}
for(let myKey of mymMap.keys()){
    console.log(myKey);
}
*/


/*================== delete(key)=====================*/
/*
var mymMap = new Map();
mymMap.set('key1', 'Bangladesh');
mymMap.set('key2', 'India');
mymMap.set('key3', 'Canada');
mymMap.set('key4', 'America');

mymMap.delete('key1');
mymMap.delete('key2');
for(let myValues of mymMap.values()){
    console.log(myValues);
}
*/




/*================= clear(key)=================*/
/*
var mymMap = new Map();
mymMap.set('key1', 'Bangladesh');
mymMap.set('key2', 'India');
mymMap.set('key3', 'Canada');
mymMap.set('key4', 'America');

mymMap.clear();
for(let myValues of mymMap.values()){
    console.log(myValues);
}
*/



/*================= get(key)=================*/
/*
var mymMap = new Map();
mymMap.set('key1', 'Bangladesh');
mymMap.set('key2', 'India');
mymMap.set('key3', 'Canada');
mymMap.set('key4', 'America');

console.log(mymMap.get('key3'));
*/


/*================= has(key)=================*/
// has diye value ase ki nai check kore
/*
var mymMap = new Map();
mymMap.set('key1', 'Bangladesh');
mymMap.set('key2', 'India');
mymMap.set('key3', 'Canada');
mymMap.set('key4', 'America');

if(mymMap.has('key1')){
    console.log('yes');
}
else{
    console.log('No');
}
*/


/*================= set method() =================*/
// double kono value thakle aktai nibe set method()
var mySet = new Set();
mySet.add('bangladesh');
mySet.add('India');
mySet.add('Nepal');
mySet.add('Bhutan');
mySet.add('Maldiv');
mySet.add('Chaina');
console.log(mySet);
