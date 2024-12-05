//DOM=> which means document object model by this we can access our page by using document we can find the html code 
// by using document code in  impact below are the way to access the html code
// console.log(window.document);
// console.dir(window.document);
// console.log(document.body);
// console.dir(document.body);

// there are some ways to access the html code in javascript
//some DOM manipulations

let head1=document.getElementById("heading");  // in this we can access it by giving heading to that by putting func
// getelementbyid() see html code  
// in css code in place of h1 we can put (#heading) as a place of h1  
// id is unique for every element
console.log(head1);
console.dir(head1);

let head2=document.getElementsByClassName("class");   // in this we can access multiple elemnts by putting them in a
// class by using getelementsbyclass() see html code
// in css code in place of h4 and button we can put (.class) as a place of them
// we can contain more than one elements in class 
// its a type of array 
console.log(head2);
console.dir(head2);

let head3=document.getElementsByTagName("p");
console.dir(head3);


// by this method queryselector() it is used for all means by this we can access all by this syntax accordingly 
// but it return only first element of that like with p name there are two parag but the return only first one
// let head4=document.querySelector("#heading");
// console.dir(head4);
// let head5=document.querySelector(".class");
// console.dir(head5);
// let head6=document.querySelector("p");
// console.dir(head6);


// by this you can access all elements from it
let head4=document.querySelectorAll("#heading");
console.dir(head4);
let head5=document.querySelectorAll(".class");
console.dir(head5);
let head6=document.querySelectorAll("p");
console.dir(head6);

