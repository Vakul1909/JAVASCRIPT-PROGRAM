let div=document.querySelector("div");  
console.log(div);
let id=div.getAttribute("name");   //getattribute is used to throw out the name of that attribute by which u write in
// your html code
console.log(id);

let p=document.querySelector("p");
console.log(p.setAttribute("about","brief"));   // by this setattribute we can change the value of attribute and the
// changes occur in html file in element column


// by  this style node we can make direct changes in the html but for that we have to select div means write line 1
div.style.backgroundColor="purple";
div.innerText=("tappu ke father");


// for creating new element below function is used
let newbtn= document.createElement("button");
newbtn.innerText="click here!";
div.before(newbtn);   // we can place button where we want means 1)-append for last in div ,2)-prepend for starting ini div
// 3)- before means just pehele div ke, 4)- after baad mein div ke.
newbtn.style.color="pink";
newbtn.style.backgroundColor="blue";


let newhd=document.createElement("h1");
newhd.innerHTML="<i>hii whatsupp...</i>";
document.querySelector("body").prepend(newhd);
newhd.style.color="balck";

//for removing element the below function is used
p.remove();   //this helps to remove para element from the html sheet