(function(){
function Employee(name){
    this.name=name;
    this.getName=function (){
        return this.name;
    }
}
var e1= new Employee("Eshu");
var e2=new Employee("Shree");
console.log(e1.getName()+ " "+e2.getName());
})();
//prototype
(function(){
    function Employee(name){

        this.name=name;
    }
    Employee.prototype.getName=function(){

        return this.name;
    }
    Employee.prototype.age=22;
    var e1=new Employee("Eshu");
    var e2=new Employee("Shree");
    console.log(e1.getName()+" "+e2.getName()+" "+e1.age);
    console.log(e1.constructor);
   
})();