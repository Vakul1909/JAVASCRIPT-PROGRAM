// arrays are mutuable means value can be change a runtime
let marks=[90,98,94,92,100];
console.log(marks);
marks[2]=100;
console.log(marks);    // value will change here but we cant done this string

for(let mark of marks){
    console.log(mark);
}
// or
let sum=0;
for(let i=0;i<marks.length;i++){
    sum+=marks[i];
}
let avg=sum/marks.length;
console.log(`average marks is: ${avg}`);
// functions in array
marks.push(99);        // add at end
console.log(marks);
marks.pop();           // remove from end
console.log(marks);
marks.toString();
console.log(marks);
let nums1=[1,2,3,4];
let nums2=[9,8,7,6];
let nums=nums1.concat(nums2);
console.log(nums);
let val=nums1.unshift(10);    // helps to add element in starting
console.log(nums1);
let val2=nums1.shift();      // helps to delete element from starting
console.log(nums1);
let new1=nums2.slice(1,3);   // slice dont change the array it return the part of the array you slice out
console.log(new1);
let new2=nums2.splice(2,2,101,23,32);  // splice will change the array what u want to do like-> replace,delete,add
console.log(nums2);