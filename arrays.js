// var arr=["Eshu","shree","Durga"];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[1]);
// console.log(arr.sort()); 
// console.log(arr.push("Sarvesh"));
// console.log(arr);
// console.log(arr.sort());
(function(){

    var cars=["Saab","Volvo","BMW"];
    console.log(cars);
    console.log(cars[1]);
    cars[0]="Opel";
    console.log(cars);
    console.log(cars.length);
    cars[cars.length]="Audi";
    console.log(cars);
    //toString()
    console.log(cars.toString());
    //join()
    console.log(cars.join( '|' ));
    //push()
    cars.push("Mercedes");
    console.log(cars);
    //pop()
    cars.pop();
    console.log(cars);
    cars.shift();
    console.log(cars.shift());
    console.log(cars);
    cars.splice(2,0,"Lamborgini");
    console.log(cars);
    //merging arrays
    var fruits=["Mango","Apple","Jackfruit"];
    console.log(cars.concat(fruits));
    //slice
    console.log(cars);
    console.log(cars.slice(1,3));
    
})();