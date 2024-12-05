let btn1=document.querySelector("#btn1");
btn1.onclick= () =>{
    console.log("btn1 was clicked");
};
// these (above/below) are the events in html we can pop out the msg when any event occured  
let box=document.querySelector("div");
box.onmouseover=()=>{
    console.log("mouse is inside in box");
};

// by puttng any value in function we can access the all the info about that particular event
btn1.onclick= (e) =>{
    // console.log(e);
    console.log(e.type);   // these all are types or parameters in event
    console.log(e.target);
    console.log(e.clientX,e.clientY);
};


// these eventlistners is used to perform multiple task on a single event by this below syntax
btn1.addEventListener("click",()=>{
    console.log("bth1 was touched-1");
});

btn1.addEventListener("click",()=>{
    console.log("bth1 was touched-2");
});

const val=()=>{
    console.log("bth1 was touched-3")}
    
btn1.addEventListener("click",val);

btn1.addEventListener("click",()=>{
    console.log("bth1 was touched-4");
});

btn1.removeEventListener("click",val);  // this will remove that particular function from that



