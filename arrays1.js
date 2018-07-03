//syntax
var x=["Eshu","Tenzin","Sindhu"];
var y= Array("Eshu","Tenzin","Sindhu");
var z=new Array("Eshu","Tenzin","Sindhu");
console.log(x);
console.log(y);
console.log(z);


var squares=Array(6);
for(var i=0;i<squares.length;i++){
    squares[i]=i*i;
}
console.log(squares);

//instance indexers
var p=['a','b','c'];
for(i=0;i<p.length;i++)
{
    console.log(p[i]);
}
p[7]='h';
console.log(p[7]);


//instance properties
console.log(p.length);
p[30]='s';
console.log(p);
console.log(p.length);