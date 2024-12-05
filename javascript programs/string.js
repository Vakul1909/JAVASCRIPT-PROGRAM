//strings are immutable in javascript means value cant be change in a runtime
let obj={
    name:"vakul",
    age:20
};
console.log(`the name is ${obj.name} and age is ${obj.age}`);   // in this line we use back tick (``) itz a new way 
// to represent code it is a second way of lower code
console.log("the name is",obj.name,"and age is",obj.age); 
let str="  vakul Mittal";
let str1="vakul";
let str2="mittal";
// function of string
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());      // it remove all whitespace
console.log(str.slice(3,8));
console.log(str.charAt(10));
console.log(str1.concat(str2));
console.log("my name is"+str1+str2);
console.log(str.replace("vakul","rudra"));

let name=prompt("enter your full name without space:");
console.log(name);
let len=name.length;
let newname="@"+name+len;
console.log(newname);
