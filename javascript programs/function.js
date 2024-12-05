function myfunction(msg){
    console.log(msg);
}
myfunction("vakul mittal");


const arrowsum=(a,b) =>{   // this is a arrow function which ia also used to create function
    return a+b;
}
let sum=arrowsum(3,5);
console.log(sum);   


function countvow(str){
    let count =0;
    for(let val of str){
        if(val==="a" ||val==="e"||val==="i"||val==="o"||val==="u"){
            count++;
        }
    }
    console.log(count);
}
let word =prompt("enter word");
countvow(word);


let arr=[1,2,3,4,5];
arr.forEach(function values(val){    // for each function is used in array to doing or access every value of array
    console.log(val);
})
//or
arr.forEach((val)=>{       // other way to execute foreach function
    console.log(val);
})
arr.forEach((val,i,arr)=>{   // there are 3 parameters in foreach func use accordingly
    console.log(val,i,arr);
})
arr.forEach((val)=>{
    console.log(val*val);
})


let arr2=[12,4,56,23,90];
arr2.map((val)=>{     // map func create a new array if u modify it and rest is same as eachof func
    console.log(val);
})


let arr3=[56,34,12,89];
let evenarray=arr3.filter((val)=>{ // basically it filter out the num acc to cond means it return the nums which satisfy the cond 
    return val%2==0;  
});
console.log(evenarray);


let sumof=arr3.reduce((prev,curr)=>{   // reduce function is basically used when we have to return only one value we
    // have to pass two argumments prev and curr prev=> first value and curr=> second value
    return prev+curr;
});
console.log(sumof);