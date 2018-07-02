(function(){
    var person={firstName:"John",lastName:"Doe"};
    console.log(person.firstName);
})();
(function(){
    var person={name:"John",age:"50"};
    console.log(person.name+ " is " +person.age+ " years old");
})();
var person={name:"Esh"};
person.age=22;
console.log(person.name+" is "+person.age);
delete person.age;
console.log(person.name+" is "+person.age);
