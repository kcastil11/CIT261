function Person (name, eyeColor, age){
    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;
    this.updateAge = function(){
        return ++ this.age;
    };
}
var person01 = new Person('Jhon', 'Black', 67);
var person02 = new Person('David', 'Blue', 37);

console.log(person01.updateAge());