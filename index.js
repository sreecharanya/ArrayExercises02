let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
//console.clear();
console.log("cargoHold",cargoHold)
console.log("_____________")

//a) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.
console.clear();
cargoHold[5]="space tether"
//console.log("replace")
console.log(cargoHold)
console.log("_____________")

//b) Remove the last item from the array with pop. Print the element removed and the updated array.
console.log("pop");
console.log(cargoHold.pop());
console.log("_____________")


//c) Remove the first item from the array with shift. Print the element removed and the updated array.
console.log("shift");
console.log(cargoHold.shift())
console.log("_____________")

//d) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.
console.log("push and unshift")
cargoHold.unshift(1138);
cargoHold.push('20-meters')
console.log(cargoHold)
console.log("_____________")

//e) Use a template literal to print the final array and its length.
let len=cargoHold.length;
console.log(`The length of the array is ${len}`)