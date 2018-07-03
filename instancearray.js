//instance methods

//concat
var s=["Eshu","Tenzin"];
var e=s.concat(["Sindhu"]);
console.log(s);
console.log(e);

//copywithin
var fruits=["Apple","Banana","Orange","Pineapple","Papaya"];
fruits.copyWithin(3,0);
console.log(fruits);


//fill()
var x=Array(5);
console.log(x.fill('a'));
console.log(x.fill('b',1));
console.log(x.fill('c',2,3));


//filter
var isEven=function(x){ return x%2===0;  }
var p=[1,2,3,4,5,6,7,8,9,10];
console.log(p.filter(isEven));
//find
console.log(p.find(isEven));
//findIndex
console.log(p.findIndex(isEven));


//for each
var se=[1,2,3,4,5];
se.forEach(function(item,index){
    console.log("Item at"+index+" = "+item);

})

//includes
console.log(se.includes(6));
console.log(se.includes(4));
console.log(se.includes(3,2)); //2 specifies the position to start the search
console.log(se.includes(3,5));
console.log(se.includes(3,1));


//indexof
console.log(se.indexOf(3));
console.log(se.indexOf(3,3));
console.log(se.indexOf(3,1));

//lastindexof

var es=[1,2,3,4,5,2,3,1];
console.log(es.lastIndexOf(3));

//map
var x=10;
var e=se.map(function(t){
return x*t;
}
)
console.log(e);

console.log(se.unshift(6,5));
console.log(se);



