age=20;
name="vakul mittal";
console.log(name);
console.log(age); 

// use of let and const
let a=10;
a=9;    // in let we can upgrade the value
a=12;
console.log(a);

const b=10;
// b=21;    // this line throw error becoz in const we cannot upgrade the value 
console.log(b);

const student={   // this form a object which having diff data types in it
    name:"vakul mittal", 
    age:20,
    cgpa:8.7,
    ispass:true,
};
console.log(student);  
console.log(student.ispass);   // we can access the wanted value by using this syntax
console.log(student["age"]);   // another way to access value
student.cgpa=student.cgpa-1;    // this is the way to upgrade value we cant done this in const as reason above metioned
console.log(student.cgpa);
console.log(typeof student.age);   // it return the type of age which is number
console.log(a+b);   // use of operator   all operator are same as c++


let mode="dark";
let color;
if(mode=="dark"){            //all statement conditions are same like c++
    color="black";
}if(mode=="light"){
    color="white";
}
let result=mode=="dark"?"black":"white";
console.log(result);
console.log(color);

let num = prompt("enter a number:");   // prompt is used for enter value by user it pop up one time box for enter the value
if(num%5===0){
    console.log(num,"is multiple of 5");
}else{
    console.log(num,"is not multiple of 5");
}