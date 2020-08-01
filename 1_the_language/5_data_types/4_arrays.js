/*
Summary
Array is a special kind of object, suited to storing and managing ordered data items.

The declaration:

// square brackets (usual)
let arr = [item1, item2...];

// new Array (exceptionally rare)
let arr = new Array(item1, item2...);
The call to new Array(number) creates an array with the given length, but without elements.

The length property is the array length or, to be precise, its last numeric index plus one. It is auto-adjusted by array methods.

If we shorten length manually, the array is truncated.

We can use an array as a deque with the following operations:

push(...items) adds items to the end.
pop() removes the element from the end and returns it.
shift() removes the element from the beginning and returns it.
unshift(...items) adds items to the beginning.
To loop over the elements of the array:

for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
for (let item of arr) – the modern syntax for items only,
for (let i in arr) – never use.
We will return to arrays and study more methods to add, remove, extract elements and sort arrays in the chapter Array methods.

 */


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

// about length
let fruits = [];
fruits[123] = "Apple";

alert( fruits.length ); // 124

// way to clear array
arr.length = 0;

// creating array with new
let arr = new Array(2); // will it create an array of [2] ?

alert( arr[0] ); // undefined! no elements.

alert( arr.length ); // length 2


//multi dimensional

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

alert( matrix[1][1] ); // the central element

//toString
let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

// because  while + operator adds somthing to string. it converts it ti a string as well
alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"