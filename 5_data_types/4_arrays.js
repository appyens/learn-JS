//two syntax
let arr = new Array();
let arr = [];

// initialization
let fruits = ["Apple", "Orange", "Plum"];

//indexing
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

//replace
fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

//add
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

//length
alert( fruits.length ); // 3

//alert
alert( fruits ); // Apple,Orange,Plum

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello

//pop

alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange

//push

fruits.push("Pear");

alert( fruits ); // Apple, Orange, Pear

//shift
alert( fruits.shift() ); // remove Apple and alert it

alert( fruits ); // Orange, Pear

//unshift
fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear

//multiple
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );

//loop
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
    alert( arr[i] );
}

let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
    alert( fruit );
}

// Technically, because arrays are objects, it is also possible to use for..in:

    let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
    alert( arr[key] ); // Apple, Orange, Pear
}