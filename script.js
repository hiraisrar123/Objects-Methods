// const car ={
//     brand: "Toyota",
//     model: "Corlla",
//     year: 2022
// }
// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));

// const  obj1 = {a:1 ,b:2};
// const  obj2  =  {c:3};
// const merged  = Object.assign({}, obj1, obj2);
// console.log(merged);

// const  user={name: "Sara",}
// Object.freeze(user); // No Change
// console.log(user.name);;

// const  data ={
//     id: 1 , status:  'active'}
// Object.seal(data);

// data.status= 'inactive'; _______Allowed

// console.log(data);

// data.newkey  = 'x'______Not  Allowed
// delete data.id _________Not  Allowed

// const student  ={name:  'Ali'}
// console.log(student.hasOwnProperty('name')); ________True
// console.log(student.hasOwnProperty('age')); ________False

// const parent = {greet: function(){
//     return'Hello!';
// }}
// const child = Object.create(parent);
// console.log(child.greet());

// const arr =[['name' ,"Hira"], ['age' ,19]]
// const obj = Object.fromEntries(arr);
// console.log(obj); Array se object banata hai

// const example = {x: 10 , y: 20}
// console.log(Object.getOwnPropertyNames(example));;




// ____________Start  ES6  ___________ Tempelete Literals
// let name = 'Ali';
// console.log(`Hello, ${name}! Howare you`);

// Short Syntax for funtions
// const add2 = (a, b) => a+b;
// console.log(add2(2, 3));

// function greet (name = 'Guest'){
//     console.log(`Hello, ${name}`);
// } 
// greet();
// greet('Hira');

const arr1 = [1,2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);
const obj1 = {a: 1};
const obj2 = {...obj1, b: 2};
console.log(obj2);
