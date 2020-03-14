//Create an object
var audi = {
    model: "RS3",
    make: "Audi",
    color: "black"
};

var mercedez = {
    model: "CLK",
    make: "Mercedez Benz",
    color:"gray"
};

var bmw ={
    model:"M3",
    make: "BMW",
    color:"pearl white"
}
//Display audi mercedez and bmw object values
function displayObject() {
    var output = Object.values(audi) + "<br>" + Object.values(mercedez) + "<br>" + Object.values(bmw)
    document.getElementById("displayobj").innerHTML=output;
}

// add a method to display make and model together
function createMethod() {
    audi.display = function(){return this.make + " " + this.model;};
    mercedez.display = function(){return this.make + " " + this.model;};
    bmw.display = function(){return this.make + " " + this.model;};
}

// display object with new method
function addMethod() {
    createMethod();
    output = audi.display() + "<br>" + mercedez.display() + "<br>" + bmw.display();
    document.getElementById("methoddiv").innerHTML=output;
}

//Display all objects
function displayAllObjects() {
    output = Object.values(audi) + "<br>" + Object.values(mercedez) + "<br>" + Object.values(bmw);
    document.getElementById("displayalldiv").innerHTML=output;
}