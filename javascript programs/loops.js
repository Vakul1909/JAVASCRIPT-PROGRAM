// all loops are same as c++ language
// let i=1;
// do{
//     console.log("i=",i);
//     i++;
// }while(i<=5);


// for-of loop   
let str="vakulmittal";
let count=0;
for(let val of str){
    console.log("val=",val);
    count++;
}
console.log("count=",count);

// for-in loop
let student={
    name:"vakul mittal", 
    age:20,
    cgpa:8.7,
    ispass:true,
};
for(let key in student){    // this loop is used to return the key values
//    console.log(key);      
    console.log(key,":",student[key]);
}

for(let i=1;i<=100;i++){
    if(i%2===0){
        console.log("even numbers are:",i);
    }
}


