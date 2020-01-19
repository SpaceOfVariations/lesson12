var myArray = ["HTML", 11, "JavaScript", 2, "CSS", 23, 12];
console.log(myArray);
myArray.push(-2);
console.log(myArray);
myArray.unshift(1000);
console.log(myArray);
myArray.push("Last array element");
console.log(myArray);
myArray.splice(3, 1);
console.log(myArray);
var numericArray = myArray.filter(item => typeof item === 'number');
console.log(numericArray);
var powArray = numericArray.map(item => Math.pow(item, 2));
console.log(powArray);
console.log(Math.max.apply(null, powArray));