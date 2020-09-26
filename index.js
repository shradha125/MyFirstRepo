alert("Click here to proceed")

console.time('Time Taken')

console.log("Hey there...My 1st javascript code")
console.error("An error occured");
console.warn("This is a warning message");

var a = {name: "shradha", age: "23", city: "Pune"}
var b = {name: "shradha", age: "23", city: "Pune"}
var c = {name: "shradha", age: "23", city: "Pune"}

//console.log({a,b,c});

console.table({a,b,c});
console.log('%c Custom message', 'color:pink;');

console.timeEnd('Time taken');
