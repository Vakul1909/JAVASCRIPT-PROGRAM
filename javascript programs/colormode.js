let butt=document.querySelector("#mode");
let currmode="light";
butt.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        let body1=document.querySelector("body").style.backgroundColor="black";
    }else{
        currmode="light";
        let body2=document.querySelector("body").style.backgroundColor="white";
    }
});