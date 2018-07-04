var objectKey = { foo: 'bar' };

var x = new Map();
x.set(1, 'keys are not converted to strings');
x.set('1', 'this is stored separately than the previous value');
x.set(objectKey, 'you use arbitrary objects as keys and values');

console.log(x.get(1));
console.log(x.get('1'));
console.log(x.get(objectKey));





var fromArray = new Map([[0, 'array0'], [objectKey, 'array1']]);

console.log(fromArray.get(0));
console.log(fromArray.get(objectKey));
console.log();


//instance properties
var x = new Map([['a', 'value A'], ['b', 'value B'], ['c', 'value C']]);

console.log(x.size);

x.set('d', 'value D');

console.log(x.size);

x.clear();

console.log(x.size);

//instance methods
//delete
var p = new Map([['a', 'value A'], ['b', 'value B'], ['c', 'value C']]);

console.log('size before delete: ' + p.size);
console.log('deleted "a" = ' + p.delete('a'));

console.log('size after delete: ' + p.size);
console.log('value for "a" = ' + p.get('a'));

console.log('deleted "foo" = ' + p.delete('foo'));
console.log('size after delete: ' + p.size);

//entries()

var myMap=new Map([['name','Eshu'],['age',22]]);
for(var [key,value1] of myMap.entries()){
    console.log(key);
    console.log(value1);
}
//has()
console.log(myMap.has('name'));
var se=myMap.values();
console.log(se);

