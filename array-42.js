//Write a JavaScript function to check whether an `input` is an array or not.

function is_array(arr){
   return Array.isArray(arr);
}
console.log(is_array('Eshu'));
console.log(is_array(["Eshu"]));


// Write a JavaScript function to clone an array.
function clone(arr){
    return arr.slice(0);
}
var a=[1,2,[3,4]];
console.log(clone(a));
console.log(a);

//Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// var arr=[1,2,3,4,5]
// function first(n){
//     for(var i=0;i<n;i++){
//         return arr[i];
//     }
// }
// console.log(first(1));
// console.log(first(3));




// Write a simple JavaScript program to join all elements of the following array into a string. 
var arr=['a','b','c','d','e'];
console.log(arr.join(','));

//Write a JavaScript program to sort the items of an array.
var se=[4,1,3,7,4,-1,-5];
console.log(se);
console.log(se.sort());